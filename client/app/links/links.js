angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
    $scope.data = {};
    $scope.getLinks = function () {
      Links.getLinks($scope.data)
        .then(function(data) {
          $scope.data.links = data;
          console.log($scope.data.links);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    $scope.getLinks();
});

