import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider, Post } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-posts-create',
  templateUrl: 'posts-create.html',
})
export class PostsCreatePage {

  post: Partial<Post> = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db: DatabaseProvider,
    public auth: AuthProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsCreatePage');
  }

  async create(user) {
    await this.db.createPost(user.uid, this.post as Post)
    this.post = {}
    await this.navCtrl.setRoot('HomePage')
  }

  updateURL(e) {
    this.post.img = e;
  }

}
