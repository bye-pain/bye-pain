export default class ButtonController {
  /** @ngInject */
  constructor() {
  }

  btnFunction(action, form) {
    console.log('action:', action);
    console.log('obj:', form);
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
