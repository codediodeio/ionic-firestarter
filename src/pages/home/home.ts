import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public adMob: AdMobFree, 
    public platform: Platform
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    if (this.platform.is('cordova')) {
      const ad: AdMobFreeInterstitialConfig = {
        id: 'ca-app-pub-6881663307118312/4719939210',
        isTesting: false,
        autoShow: true
      }
      this.adMob.interstitial.config(ad);
      this.adMob.interstitial.prepare()
    }

  }

}
