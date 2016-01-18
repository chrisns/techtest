var myModule = require('../index');

global.chai = require('chai')
  .use(require('chai-as-promised'))
  .use(require('sinon-chai'));
global.expect = chai.expect;
global._ = require('lodash');
global.sinon = require('sinon');
require('sinon-as-promised')(require('bluebird'));

describe('technical test', function () {
  it('should be ok', function (done) {
    myModule.dostuff(function (response) {
      expect(response).to.eql({
        "dates": [
          "Sat Oct 04 2014 07:57:00 GMT+0100 (BST)",
          "Fri Apr 03 2015 23:02:00 GMT+0100 (BST)",
          "Tue Feb 25 2014 15:26:00 GMT+0000 (GMT)",
          "Wed Mar 19 2014 19:49:00 GMT+0000 (GMT)"
        ],
        "emails": [
          "pansy.hogan@zillacom.com",
          "wilson.murray@comtrek.biz",
          "elba.bauer@terrasys.us",
          "mckenzie.sanchez@tsunamia.tv",
        ],
        "tags": [
          "7",
          "Ipsumbb",
          "Ipsum",
          "12",
          "Ipsumer"
        ]
      });
      done();
    });
  })
});