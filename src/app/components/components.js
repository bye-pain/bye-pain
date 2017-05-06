import {Form} from './form/form';
import {NavBar} from './navbar/navbar';
import {Button} from './button/button';
import {Row} from './row/row';
import {ButtonAction} from '../constants/button-action';

export default angular
  .module('component', ['ui.router'])
  .component('buttonComponent', Button)
  .component('formComponent', Form)
  .component('navbarComponent', NavBar)
  .constant('rowComponent', Row)
  .constant('buttonAction', ButtonAction)
  .name;
