'use strict';

module.exports = function(app, db) {
    
    app.get('/tweets', function(req, res) {
        getTweet(res);
    });

    app.post('/tweets', function(req, res) {
        var newTweet = {
            email : req.body.email,
            message : req.body.message
        };
        db.createTweet(newTweet, function(err, tweet) {
            if (err)
                res.end(err);
            
            getTweet(res);
        });  
    });
    
    function getTweet(res){
       db.getTweet(function(err, tweets){
            if(err)
                res.end(err);
           
            res.end(JSON.stringify(tweets));
       }); 
    }

    app.get('*', function(req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};