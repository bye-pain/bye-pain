class FormController {
  constructor() {
    this.inputs = [{
      type: 'email',
      id: 1,
      label: 'teste',
      disabled: 'disabled',
      sucess: 'Sensacional',
      error: 'Porra Jamelão ve se cadastra certo essa porrra',
      class: 'validate'
    },
    {
      type: 'email',
      id: 2,
      label: 'teste2',
      disabled: false,
      error: 'Ex:exemplo@email.com',
      value: 'sidnei@gmail.com',
      class: 'validate'
    }];
  }
}

export const Form = {
  template: require('./Form.html'),
  controller: FormController,
  bindings: {
    description: '@',
    icon: '@',
    type: '@',
    value: '@',
    disabled: '=',
    sucess: '@',
    error: '@',
    class: '@'
  }
};
