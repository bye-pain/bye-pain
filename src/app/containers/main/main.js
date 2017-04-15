import * as button from '../../constants/button-action';

class MainController {
  /** @ngInject */
  constructor($state) {
    this.$state = $state;
    this.init();
  }

  changeView() {
    console.log('changeView');
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
  controller: MainController,
  bindings: {}
}
