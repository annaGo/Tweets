'use strict';

angular.module('tweetApp')
    .controller('tweetController', ['$scope', 'tweetService', function($scope, tweetService) {
    
    $scope.errorPlace = '';
    $scope.tweets = [];
    $scope.formData = {
                    email: '',
                    message: ''
                };
    
    loadData();
    
    $scope.createTweet = function() {    
        tweetService.create($scope.formData)
            .then(function(response){
                applyData(response.data)
            }).catch(function() {
                $scope.errorPlace = 'Server error has occurred'
            });
        $scope.formData.email = '';
        $scope.formData.message = '';
    }
    
    function applyData(tweets) {
        $scope.tweets = tweets;
    }
    
    function loadData() {
        tweetService.get()
            .then(function(res) {
                    applyData(res.data);
                }
            )
        ;
    }

}]);