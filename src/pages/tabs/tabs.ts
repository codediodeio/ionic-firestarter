import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'PostsCreatePage';
  tab3Root = 'UsersPage';
  tab4Root = 'ProfilePage';

  constructor() {

  }
}
