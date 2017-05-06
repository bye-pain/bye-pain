class LoginFormController {
  /** @ngInject */
  constructor($state, buttonAction) {
    this.$state = $state;
    this.buttonAction = buttonAction;
    this.init();
  }

  login() {
    this.$state.go('main');
  }

  init() {
    this._lines = [
      [{
        model: 'user',
        type: 'text',
        minlength: 2,
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
      }],
      [
        {
          model: 'password',
          type: 'password',
          id: 2,
          minlength: 8,
          label: 'Senha',
          disabled: false,
          class: 'validate'
        }
      ]
    ];
    this._buttons = [{
      class: 'btn-outline-info',
      label: 'Esqueceu a senha?',
      function: this.buttonAction.RESET_PASSWORD
    },
    {
      class: 'btn-outline-success',
      label: 'Login',
      function: this.login,
      disabled: true
    }];
  }
}

export const LoginForm = {
  template: require('./login-form.html'),
  controller: LoginFormController
};
