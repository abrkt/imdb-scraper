'use strict';

var imdb = require('../imdb.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

chai.use(chaiAsPromised);

describe('imdb', function() {
  describe('title()', function() {
    it('should scrap The Godfather data by id', function() {
      return expect(imdb.title('tt0068646')).to.eventually.deep.equal(require('./TheGodfather'));
    });

    describe('find()', function() {
      it('should find results for The Imitation Game', function() {
        var epected = require('./TheImitationGameResults');
        return expect(imdb.title.find('The Imitation Game')).to.eventually.deep.equal(epected);
      });
    });
  });
});