'use strict';

var imdb = require('../imdb.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

chai.use(chaiAsPromised);

describe('imdb', function() {
  describe('title()', function() {
    it('should scrap title data by id', function() {
      return expect(imdb.title('tt0068646')).to.eventually.have.all.keys(
        'id',
        'name',
        'poster',
        'duration',
        'genre',
        'year',
        'description',
        'storyline',
        'director',
        'stars',
        'rating'
      );
    });

    it('reject invalid ids', function() {
      return expect(imdb.title('imdb-scrapper')).to.be.rejectedWith(Error);
    });

    describe('find()', function() {
      it('should find results for valid movie name', function() {
        return expect(imdb.title.find('The Imitation Game')).to.eventually.have.length(3);
      });

      it('should not find results for invalid movie name', function() {
        return expect(imdb.title.find('imdb-scrapper')).to.eventually.have.length(0);
      });
    });

    describe('first()', function() {
      it('should return the first title data', function() {
        return expect(imdb.title.first('The Godfather')).to.eventually.have.all.keys(
          'id',
          'name',
          'poster',
          'duration',
          'genre',
          'year',
          'description',
          'storyline',
          'director',
          'stars',
          'rating'
        );
      });
    });
  });
});