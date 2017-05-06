class AppController {
  constructor() {
    this.teste = {};
  }
}

export const App = {
  template: require('./app.html'),
  controller: AppController,
  bindings: {}
};

