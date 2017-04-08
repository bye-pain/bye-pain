class LoginFormController {
  constructor() {
    this.init();
  }

  init() {
    this._inputs = [{
      type: 'email',
      id: 1,
      label: 'Login',
      disabled: 'disabled',
      sucess: 'Sensacional',
      error: 'Porra Jamelão ve se cadastra certo essa porrra',
      class: 'validate'
    },
    {
      type: 'email',
      id: 2,
      label: 'Senha',
      disabled: false,
      error: 'Ex:exemplo@email.com',
      class: 'validate'
    }];
  }
}

export const LoginForm = {
  template: require('./login-form.html'),
  controller: LoginFormController,
  bindings: {}
}
