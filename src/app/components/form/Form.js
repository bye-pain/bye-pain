class FormController {
  constructor() {
    this.teste = 'TESTE';
  }
}

export const Footer = {
  template: require('./Form.html'),
  controller: FormController,
  bindings: {
    description: '@',
    icon: '@'
  }
};
