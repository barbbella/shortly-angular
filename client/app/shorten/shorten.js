angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
    $scope.link = {};
    $scope.addLink = function () {
      Links.addLink($scope.link)
        .then(function() {
          console.log(0987,$scope.link);
          //$scope.link = data;
        })
        .catch(function (error) {
          console.error(error);
        });
    };
});
