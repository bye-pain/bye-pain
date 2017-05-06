import {App} from './app';
import {Main} from './main/main';
import {LoginForm} from './login-form/login-form';
import {UserForm} from './user-form/user-form';

export default angular
  .module('containers', ['ui.router'])
  .component('appComponent', App)
  .component('loginForm', LoginForm)
  .component('userForm', UserForm)
  .component('main', Main)
  .name;
