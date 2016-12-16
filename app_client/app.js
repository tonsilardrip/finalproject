angular.module('getfoods', ['ngRoute']);
    
function config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'awesomefoods',
        controllerAs: 'vm'
      })
      
      
      .otherwise({redirectTo: '/'});
}
angular.module('getfoods' , ['ngRoute'])
    .config(['$routeProvider', config]);