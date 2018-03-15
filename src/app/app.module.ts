import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebase = {
  apiKey: "AIzaSyBYIyqNfRuLw-QAW5ikgfzy764L-gJCrhI",
  authDomain: "firebasics-f9f42.firebaseapp.com",
  databaseURL: "https://firebasics-f9f42.firebaseio.com",
  projectId: "firebasics-f9f42",
  storageBucket: "firebasics-f9f42.appspot.com",
  messagingSenderId: "586497977710"
}

import { Firebase } from '@ionic-native/firebase';
import { Facebook } from '@ionic-native/facebook';
import { Camera } from '@ionic-native/camera';

import { ComponentsModule } from '../components/components.module'
import { DatabaseProvider } from '../providers/database/database';
import { FcmProvider } from '../providers/fcm/fcm';
import { AnalyticsProvider } from '../providers/analytics/analytics';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Firebase,
    Facebook,
    DatabaseProvider,
    Camera,
    FcmProvider,
    AnalyticsProvider
  ]
})
export class AppModule {}
