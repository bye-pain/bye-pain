class FormController {
  constructor() {
    this.teste = 'TESTE';
  }
}

export const Form = {
  template: require('./Form.html'),
  controller: FormController,
  bindings: {
    description: '@',
    icon: '@'
  }
};
