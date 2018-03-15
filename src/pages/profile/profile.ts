import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AnalyticsProvider } from '../../providers/analytics/analytics';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider,
    public analytics: AnalyticsProvider 
  ) {}

  ionViewCanEnter() {
    return this.auth.isLoggedIn();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.analytics.logPageView('ProfilePage')
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
