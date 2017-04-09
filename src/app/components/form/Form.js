export default class FormController {
  constructor() {
    this.object = {};
  }
}

export const Form = {
  template: require('./form.html'),
  controller: FormController,
  bindings: {
    description: '@',
    body: '@',
    icon: '@',
    type: '@',
    value: '@',
    disabled: '=',
    sucess: '@',
    error: '@',
    class: '@',
    inputs: '=',
    buttons: '='
  }
};
