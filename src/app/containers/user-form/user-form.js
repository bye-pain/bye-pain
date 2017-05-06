class UserFormController {
  constructor() {
    this.init();
  }

  init() {
    this._inputs = [{
      type: 'text',
      id: 1,
      label: 'USER',
      sucess: 'Sensacional',
      error: 'Porra Jamelão ve se cadastra certo essa porrra',
      class: 'validate'
    }];
  }
}

export const UserForm = {
  template: require('./user-form.html'),
  controller: UserFormController
};
