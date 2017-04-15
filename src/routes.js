export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'appComponent'
    })
     .state('main', {
      url: '/',
      component: 'main'
    })
     .state('user', {
      url: '/',
      component: 'userForm'
    });
}
