// import * as button from '../../constants/button-action';

class MainController {
  /** @ngInject */
  constructor($state, $log) {
    this.$state = $state;
    this.$log = $log;
    this.init();
  }

  changeView() {
    this.$log.info('changeView');
  }

  init() {
    this.buttons = [{
      class: 'btn-unique',
      label: '',
      image: '/images/view-grid.png',
      function: this.changeView
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

