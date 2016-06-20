'use strict';

require('mongoose-type-email');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    
    TweetSchema = new Schema({
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    }),
    
    Tweet = mongoose.model('tweet', TweetSchema);

module.exports = Tweet;