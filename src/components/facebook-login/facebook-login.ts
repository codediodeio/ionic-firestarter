import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'facebook-login',
  templateUrl: 'facebook-login.html'
})

export class FacebookLoginComponent {

  constructor(
    public auth: AuthProvider, 
    public navCtrl: NavController
  ) {}

  async login() {

    await this.auth.facebookLogin();

    await this.navCtrl.setRoot(TabsPage)

  }

}
