import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RemoteConfigProvider } from '../../providers/remote-config/remote-config';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  bannerText: Promise<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider,
    public remoteConfig: RemoteConfigProvider 
  ) {}

  ionViewCanEnter() {
    return this.auth.isLoggedIn();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.bannerText = this.remoteConfig.getValue('profile_banner')
  }

  openEditPage() {
    this.navCtrl.push('ProfileEditPage')
  }

  openPostFeed(user) {
    this.navCtrl.push('UserPostsPage', {
      userId: user.uid,
      name: user.displayName
    })
  }

}
