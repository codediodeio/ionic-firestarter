import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider
  ) {}

  ionViewCanEnter() {
    return this.auth.getCurrentUser();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openEditPage() {
    this.navCtrl.push('ProfileEditPage')
  }

}
