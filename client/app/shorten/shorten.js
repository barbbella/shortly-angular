angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
    $scope.link = {};
    $scope.loading = true;
    $scope.addLink = function () {
      Links.addLink($scope.link)
        .then(function() {
          $scope.loading = false;
          $location.path('/');
        })
        .catch(function (error) {
          console.error(error);
        });
    };

});
