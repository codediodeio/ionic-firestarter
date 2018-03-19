import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';

@Injectable()
export class RemoteConfigProvider {
  private defaults = {
    profile_banner: 'Default Hello'
  };

  constructor(public firebaseNative: Firebase, public platform: Platform) {}

  initialize() {
    if (this.platform.is('cordova')) {
      const win = (window as any);

      win.FirebasePlugin.fetch(
        600,
        () => {
          console.log('fetched remote config ');
            win.FirebasePlugin.activateFetched(
            () => {
              console.log('activated remote config');
            },
            error => {
              console.error('error initializing remote config', error);
            }
          );
        },
        error => {
          console.error('error fetching remote config', error);
        }
      );
    }
  }

  async getValue(key: string) {

    if (this.platform.is('cordova')) {
      const win = window as any;

      const remoteVal = await new Promise((resolve, reject) => {
        win.FirebasePlugin.getValue(
          key,
          value => {
            console.log('value', value);
            resolve(value);
          },
          error => {
            console.log('error getting value' + error);
            reject(error);
          }
        );
      });

      return remoteVal || this.defaults[key];
    } else {
      // PWA Implementation
      return this.defaults[key]
    }
  }
}
