import {Form} from './form/form';
import {NavBar} from './navbar/navbar';
import {Button} from './button/button';
import {ButtonAction} from '../constants/button-action';

export default angular
  .module('component', ['ui.router'])
  .component('buttonComponent', Button)
  .component('formComponent', Form)
  .component('navbarComponent', NavBar)
  .constant('buttonAction', ButtonAction)
  .name;
