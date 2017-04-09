import angular from 'angular';
import 'mdbootstrap/js/bootstrap.js';
import 'mdbootstrap/js/mdb.js';

import {Form} from './app/components/form/form';
import {Button} from './app/components/button/button';
import {App} from './app/containers/app';
import {LoginForm} from './app/containers/login-form/login-form';
import {UserForm} from './app/containers/user-form/user-form';
import 'angular-ui-router';
import routesConfig from './routes';

import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/style.css';
import 'todomvc-app-css/index.css';
import 'mdbootstrap/css/mdb.css';
import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('appComponent', App)
  .component('loginForm', LoginForm)
  .component('userForm', UserForm)
  .component('buttonComponent', Button)
  .component('formComponent', Form);
