import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Firebase } from "@ionic-native/firebase";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class RemoteConfigProvider {
  private defaults = {
    profile_banner: "Default Hello"
  };

  constructor(public firebaseNative: Firebase, public platform: Platform) {}

  initialize() {
    if (this.platform.is("cordova")) {
      (window as any).FirebasePlugin.fetch(
        600,
        () => {
          console.log("fetched remote config ");
        },
        error => {
          console.error("error initializing remote config", error);
        }
      );
    }
  }

  async getValue(key: string) {

    if (this.platform.is("cordova")) {
      const win = window as any;

      const remoteVal = await new Promise((resolve, reject) => {
        win.FirebasePlugin.getValue(
          "profile_banner",
          value => {
            resolve(value);
            console.log("value", value);
          },
          function(error) {
            reject(error);
            console.log("error getting value" + error);
          }
        );
      });

      return remoteVal || this.defaults[key];
    }
  }
}
