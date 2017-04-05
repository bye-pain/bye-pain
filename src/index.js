import angular from 'angular';
import 'mdbootstrap/js/bootstrap.js';
import 'mdbootstrap/js/mdb.js';

// import {TodoService} from './app/todos/todos';
// import {App} from './app/containers/App';
// import {Header} from './app/components/Header';
// import {MainSection} from './app/components/MainSection';
// import {TodoTextInput} from './app/components/TodoTextInput';
// import {TodoItem} from './app/components/TodoItem';
import {Form} from './app/components/form/Form';
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
  // .service('todoService', TodoService)
  // .component('app', App);
  // .component('headerComponent', Header)
  .component('formComponent', Form);
  // .component('mainSection', MainSection)
  // .component('todoTextInput', TodoTextInput)
  // .component('todoItem', TodoItem);
