import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {

  newName: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider,
    public afs: AngularFirestore
  ) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileEditPage');
  }

  updateProfile(user) {
    console.log(this.newName, user)
    const ref = this.afs.collection('users').doc(user.uid)

    return ref.update({ displayName: this.newName })
  }
}
