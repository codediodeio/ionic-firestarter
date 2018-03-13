import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsCreatePage } from './posts-create';

@NgModule({
  declarations: [
    PostsCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(PostsCreatePage),
  ],
})
export class PostsCreatePageModule {}
