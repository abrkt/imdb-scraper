'use strict';

var imdb = require('../imdb');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

chai.use(chaiAsPromised);

describe('imdb', function() {
  describe('#title()', function() {
    it('should scrap title data by id', function() {
      return expect(imdb.title('tt0068646')).to.eventually.deep.equal(require('./TheGodfather'));
    });
  });
});