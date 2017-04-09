class LoginFormController {
  constructor() {
    this.init();
  }

  init() {
    this._inputs = [{
      model: 'user',
      type: 'email',
      minlength: 10,
      id: 1,
      label: 'Login',
      sucess: 'Sensacional',
      error: 'Ex:exemplo@email.com',
      class: 'validate',
      required: 'required'
    },
    {
      model: 'password',
      type: 'password',
      id: 2,
      minlength: 8,
      label: 'Senha',
      disabled: false,
      class: 'validate'
    }];
    this._buttons = [{
      class: 'btn-outline-info',
      label: 'Esqueceu a senha?',
      function: '2'
    },
    {
      class: 'btn-outline-success',
      label: 'Login',
      function: '1',
      disabled: true
    }];
  }
}

export const LoginForm = {
  template: require('./login-form.html'),
  controller: LoginFormController,
  bindings: {}
}
