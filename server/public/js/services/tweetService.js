'use strict';

angular.module('tweetApp')
    .factory('tweetService', ['$http', function($http) {
        return {
            get : function() {
                return $http.get('/tweets');
            },

            create : function(tweetData) {
                return $http.post('/tweets', {
                    email: tweetData.email, 
                    message: tweetData.message
                });
            }
        }       
}]);