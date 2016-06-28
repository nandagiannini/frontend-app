export default function UserConfig($stateProvider) {
  $stateProvider
    .state('user', {
      url: '/usuario',
      templateUrl: './src/user/view/user.html'
    })
    .state('user.me', {
      url: '/eu',
      templateUrl: './src/user/view/me.html',
      controller: 'UserMe',
      controllerAs: 'ctrl'
    })
    .state('user.register', {
      url: '/cadastro',
      templateUrl: './src/user/view/register.html',
      controller: 'UserRegister',
      controllerAs: 'ctrl'
    })
    .state('user.change', {
      url: '/eu/alterar',
      templateUrl: './src/user/view/change.html',
      controller: 'UserChange',
      controllerAs: 'ctrl'
    })
}