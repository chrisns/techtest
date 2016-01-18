var http = require('http');
var request = require('request');
var _ = require('lodash');
var moment = require('moment');
require('moment-range');

process.env.TZ = "UTC";

var myModule = {
  dostuff: function (cb) {
    request('https://raw.githubusercontent.com/chrisns/techtest/master/example.json', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        data = _.map(data, function (item) {
          item.registered = new Date(item.registered).toString();
          item.tags = _.map(item.tags, function (tag) {
            return _.capitalize(tag);
          });
          return item;
        });
        data = _.filter(data, function (item) {
          return item.isActive;
        });
        var response = {
          emails: _.map(data, 'email'),
          tags: _.uniq(_.flatten(_.map(data, 'tags'))),
          dates: _.map(data, 'registered')
        };
        cb(response);
      }
    });
  }
};

module.exports = myModule;