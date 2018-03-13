import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPostsPage } from './user-posts';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    UserPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPostsPage),
    ComponentsModule
  ],
})
export class UserPostsPageModule {}
