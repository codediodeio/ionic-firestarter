import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsCreatePage } from './posts-create';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    PostsCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(PostsCreatePage),
    ComponentsModule
  ],
})
export class PostsCreatePageModule {}
