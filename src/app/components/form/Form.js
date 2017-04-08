export default class FormController {
  constructor() {
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
    inputs: '='
  }
};
