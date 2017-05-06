class MainController {
  /** @ngInject */
  constructor($state, $log) {
    this.$state = $state;
    this.$log = $log;
    this.viewTable = false;
    this.init();
  }

  changeView() {
    this.viewTable = !this.viewTable;
    this.$log.info(`view table = ${this.viewTable}`);
  }

  init() {
    this.buttons = [{
      class: 'btn-unique',
      label: '',
      function: this.changeView,
      model: this.viewTable,
      init: this.viewTable = true
    }];
    this.desserts = [{
      name: 'sidnei',
      teste: 'testado'
    },
    {
      name: 'sidnei',
      teste: 'testado'
    }];
  }
}

export const Main = {
  template: require('./main.html'),
  controller: MainController
};

