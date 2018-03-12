import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { take, tap } from 'rxjs/operators';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    auth: AuthProvider
  ) {

    platform.ready().then(() => {

      auth.getCurrentUser()
        .then(user => { 

          if (user) {
            this.rootPage = TabsPage 
          } else {
            this.rootPage = LoginPage
          }

          statusBar.styleDefault();
          splashScreen.hide();

      })

    });
  }
}
