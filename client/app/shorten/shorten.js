angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
    $scope.link = {};
    $scope.addLink = function () {
      Links.addLink($scope.link)
        .catch(function (error) {
          console.error(error);
        });
    };
});
