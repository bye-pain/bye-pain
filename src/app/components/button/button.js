import * as button from '../../constants/button-action';

export default class ButtonController {
  /** @ngInject */
  constructor($state) {
    this.$state = $state;
  }

  btnFunction(action, form) {
    switch (action) {
      case button.SAVE:
        console.log(button.SAVE);
        break;
      case button.DELETE:
        console.log(button.DELETE);
        break;
      case button.RESET_PASSWORD:
        console.log(button.RESET_PASSWORD);
        break;
      case button.SEARCH:
        console.log(button.SEARCH);
        break;
      default:
        if (typeof (action) === 'function') return action.call(this);
    }
  }
}

export const Button = {
  template: require('./button.html'),
  controller: ButtonController,
  bindings: {
    buttons: '=',
    form: '='
  }
};
