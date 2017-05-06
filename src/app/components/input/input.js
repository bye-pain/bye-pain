/**
 * Created by crist on 06/05/2017.
 */
export default class InputController {
  /** @ngInject */
  constructor($state) {
    this.$state = $state;
    this.init();
  }

  init() {
    this._firstRow = [{label: 'linha1'}, {label: 'linha1'}];
    this._secondRow = [{label: 'linha2'}, {label: 'linha2'}];
    this._rows = [this._firstRow, this._secondRow];
  }
}

export const Input = {
  template: require('./input.html'),
  controller: InputController,
  bindings: {
    classDiv: '@',
    label: '@'
  },
  restric: 'AE'
};
