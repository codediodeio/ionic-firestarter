import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileEditPage } from './profile-edit';

@NgModule({
  declarations: [
    ProfileEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileEditPage),
  ],
})
export class ProfileEditPageModule {}
