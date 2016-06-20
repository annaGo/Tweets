'use strict';

var mongoose = require('mongoose'),
    Tweet = require('./models/Tweet'),
    DB = {
        connect : function() {
            mongoose.connect('mongodb://localhost/tweetapp');
        },

        getTweet : function(callback) {
            Tweet.find(function(err, tweets) {
                callback(err, tweets);
            }); 
        },

        createTweet : function(newTweet, callback) {
            Tweet.create(newTweet, function(err, tweet) {
                callback(err, tweet);
            });
        }
    };

module.exports = DB;