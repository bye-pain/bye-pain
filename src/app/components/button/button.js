export default class ButtonController {
  /** @ngInject */
  constructor($state, $log, buttonAction) {
    this.$state = $state;
    this.$log = $log;
    this.buttonAction = buttonAction;
  }

  btnFunction(action, form) {
    switch (action) {
      case this.buttonAction.SAVE:
        this.$log.warn(this.buttonAction.SAVE);
        break;
      case this.buttonAction.DELETE:
        this.$log.warn(this.buttonAction.DELETE);
        break;
      case this.buttonAction.RESET_PASSWORD:
        this.$log.warn(this.buttonAction.RESET_PASSWORD);
        break;
      case this.buttonAction.SEARCH:
        this.$log.warn(this.buttonAction.SEARCH);
        break;
      default:
        if (angular.isFunction(action)) {
          this.$log.warn(form);
          return action.call(this);
        }
        break;
    }
  }
}

export const Button = {
  template: require('./button.html'),
  controller: ButtonController,
  bindings: {
    buttons: '=',
    form: '='
  },
  restric: 'AE'
};
