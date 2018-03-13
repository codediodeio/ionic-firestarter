import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { DatabaseProvider, Post } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-user-posts',
  templateUrl: 'user-posts.html',
})
export class UserPostsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
  }

  get userId() {
    return this.navParams.get('userId');
  }

  get displayName() {
    return this.navParams.get('displayName');
  }

}
