var app = angular.module('VisiteApp', []);

app.config(function($routeProvider) {
  $routeProvider
      .when('/etapes',                   { controller: 'EtapesCtrl',            templateUrl: 'partials/etapes.html' })
      .when('/contact',                  { controller: 'ContactCtrl',           templateUrl: 'partials/contact.html' })
      .otherwise(                        { redirectTo: '/etapes' });
});

app.controller('EtapesCtrl', ['$http', '$scope', function($http, $scope) {
  $http.get('/server/data/etapes.json/$')
  .success(function(etapes) {
      $scope.etapes = etapes;
  });

app.controller('ContactCtrl', ['$http', '$scope', function($http, $scope) {
  $http.get('/server/data/contact.json/$')
  .success(function(contact) {
      $scope.contact = contact;
  });
}]);