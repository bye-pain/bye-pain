import angular from 'angular';
import 'mdbootstrap/js/bootstrap.js';
import 'mdbootstrap/js/mdb.js';
import 'angular-material-data-table/dist/md-data-table.min.js';

import 'angular-ui-router';
import routesConfig from './routes';
import component from './app/components/components';
import containers from './app/containers/containers';

import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import 'mdi/css/materialdesignicons.css';
import 'angular-material-data-table/dist/md-data-table.min.css';
import 'mdbootstrap/css/style.css';
import './index.scss';

angular
  .module('app', ['ui.router', component, containers])
  .config(routesConfig);
