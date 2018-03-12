import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { FacebookLoginComponent } from './facebook-login/facebook-login';
import { AnonymousLoginComponent } from './anonymous-login/anonymous-login';
import { UserLogoutComponent } from './user-logout/user-logout';
@NgModule({
	declarations: [FacebookLoginComponent,
    FacebookLoginComponent,
    AnonymousLoginComponent,
    UserLogoutComponent],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [FacebookLoginComponent,
    FacebookLoginComponent,
    AnonymousLoginComponent,
    UserLogoutComponent]
})
export class ComponentsModule {}
