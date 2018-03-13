import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'user-logout',
  templateUrl: 'user-logout.html'
})
export class UserLogoutComponent {

  constructor(
    public auth: AuthProvider, 
    public navCtrl: NavController
  ) {}

  async logout() {
    await this.auth.logout();
    await this.navCtrl.setRoot(LoginPage)
  }


}
