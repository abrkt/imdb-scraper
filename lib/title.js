'use strict';
var Q = require('q');
var request = require('request');
var cheerio = require('cheerio');

function title(id, deferred) {
  request('http://www.imdb.com/title/' + id, function(error, response, html) {
    if (error) {
      deferred.reject(error);
    } else {
      if (response.statusCode === 200) {
        var $ = cheerio.load(html);
        var genre = [];
        var stars = [];
        $('.infobar [itemprop=genre]').each(function(i, element) {
          genre.push($(element).text());
        });
        $('[itemprop=actors]>a').each(function(i, element) {
          stars.push({
            id: $(element).attr('href').split('/')[2],
            name: $(element).text()
          });
        });
        deferred.resolve({
          id: id,
          name: $('.header [itemprop=name]').text().trim(),
          poster: $('#img_primary img').attr('src'),
          duration: $('.infobar [itemprop=duration]').text().trim(),
          genre: genre,
          year: $('.header span.nobr').text().replace('(', '').replace(')', '').trim(),
          description: $('#overview-top [itemprop=description]').text().trim(),
          storyline: $('#titleStoryLine [itemprop=description] p').text().replace(/\s+/gi, ' '),
          director: {
            id: $('[itemprop=director] a').attr('href').split('/')[2],
            name: $('[itemprop=director] [itemprop=name]').text().trim()
          },
          stars: stars,
          rating: {
            value: $('[itemprop=aggregateRating] [itemprop=ratingValue]').text().trim(),
            best: $('[itemprop=aggregateRating] [itemprop=bestRating]').text().trim(),
            count: $('[itemprop=aggregateRating] [itemprop=ratingCount]').text().trim()
          }
        });
      } else {
        deferred.reject(new Error('Movie not found'));
      }
    }
  });
  return deferred.promise;
}

function find(term) {
  var deferred = Q.defer();
  request('http://www.imdb.com/find?s=tt&exact=true&q=' + term, function(error, response, html) {
    if (error) {
      deferred.reject(error);
    } else {
      var $ = cheerio.load(html);
      var results = [];
      $('.result_text').each(function(i, element) {
        results.push({
          id: $(element).children('a').attr('href').split('/')[2],
          name: $(element).text()
        });
      });
      deferred.resolve(results);
    }
  });
  return deferred.promise;
}

function first(term) {
  var deferred = Q.defer();
  find(term).then(
    function(results) {
      if (results.length > 0)
        title(results[0].id, deferred);
      else
        deferred.resolve({});
    },
    function(error) {
      deferred.reject(error);
    });
  return deferred.promise;
}

module.exports = function(id) {
  return title(id, Q.defer());
};
module.exports.find = find;
module.exports.first = first;