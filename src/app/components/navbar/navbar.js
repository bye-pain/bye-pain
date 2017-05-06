export default class NavBarController {
  constructor() {
    this.a = {};
  }
}

export const NavBar = {
  template: require('./navbar.html'),
  controller: NavBarController,
  restric: 'AE'
};
