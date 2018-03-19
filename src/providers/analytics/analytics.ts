import { Injectable } from '@angular/core';
import { App, Platform } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { AuthProvider } from '../auth/auth';

@Injectable()
export class AnalyticsProvider {
  constructor(
    app: App,
    auth: AuthProvider,
    private platform: Platform,
    private firebaseNative: Firebase,
  ) {

    if (platform.is('cordova')) {
      // Tracks the current page name
      app.viewDidEnter.subscribe(view => {
        firebaseNative.setScreenName(view.name);
        firebaseNative.logEvent('page_view', { page: view.name });
      });
      auth.user.subscribe(user => {
        const uid = user ? user.uid : 'guest';
        firebaseNative.setUserId(uid);
      });

      
    }
  }

  logEvent(event: string, data?: Object) {
    if (this.platform.is('cordova')) {
      console.log('analytics log...', event);
      return this.firebaseNative.logEvent(event, data);
    }
  }

  //// REMOTE CONFIG ////

  // getRc(){
  //   (<any>window).FirebasePlugin.fetch(600, result => {
  //     // activate the fetched remote config
  //     console.log(JSON.stringify(result)); //Always "OK"
  //     (<any>window).FirebasePlugin.activateFetched(
  //       // Android seems to return error always, so we want to cath both
  //       result => { 
  //         console.log(JSON.stringify(result)); //either true or false
  //        (<any>window).FirebasePlugin.getValue("value", result => {  
  //        console.log(result)  
  //         }, reason => {
  //        console.warn(`Error  ${reason}`);
  //        });
  //       }, reason => { 
  //         console.warn(reason); 
  //       }
  //     )
  //   });
  // }



}
