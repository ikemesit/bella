import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: require('./header.html'),
  host: { '(window:scroll)' : 'toggleHeaderClass($event)'}
})
export class HeaderComponent {

  isScrolled: boolean;

  constructor () {
    this.isScrolled = false;
  }

  toggleHeaderClass (evt: any) {
    if (window.pageYOffset > 120) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }


}
