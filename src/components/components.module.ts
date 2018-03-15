import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { FacebookLoginComponent } from './facebook-login/facebook-login';
import { AnonymousLoginComponent } from './anonymous-login/anonymous-login';
import { UserLogoutComponent } from './user-logout/user-logout';
import { PostFeedComponent } from './post-feed/post-feed';
import { HeartButtonComponent } from './heart-button/heart-button';
import { UserRelationshipComponent } from './user-relationship/user-relationship';
import { ImageUploadComponent, UploadModal } from './image-upload/image-upload';


@NgModule({
	declarations: [
        FacebookLoginComponent,
        FacebookLoginComponent,
        AnonymousLoginComponent,
        UserLogoutComponent,
        PostFeedComponent,
    HeartButtonComponent,
    UserRelationshipComponent,
    ImageUploadComponent,
    UploadModal
    ],
	imports: [
		CommonModule,
		IonicModule
	],
    exports: [
        FacebookLoginComponent,
        FacebookLoginComponent,
        AnonymousLoginComponent,
        UserLogoutComponent,
        PostFeedComponent,
    HeartButtonComponent,
    UserRelationshipComponent,
    ImageUploadComponent,
    UploadModal
    ],
    entryComponents:[
        UploadModal
    ]
})
export class ComponentsModule {}
