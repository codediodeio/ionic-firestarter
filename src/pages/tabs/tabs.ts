import { Component } from '@angular/core';


// import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';




  tab2Root = 'ProfilePage';
  tab3Root = 'ProfilePage';
  tab4Root = 'ProfilePage';

  constructor() {

  }
}
