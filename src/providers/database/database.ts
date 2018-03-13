import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

export interface Post {
  userId: string;
  createdAt: Date;
  image: string;
  content: string;
  likeCount: number;
  [key: string]: any;
}

@Injectable()
export class DatabaseProvider {

  private postsRef: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsRef = this.afs.collection('posts');
   }


  getRecentPosts() {
    return this.afs.collection('posts', ref => 

      ref.orderBy('createdAt', 'desc')
         .limit(10)
    )
  }

  getUserPosts(userId: string) {
    return this.afs.collection('posts', ref => 

      ref.orderBy('createdAt', 'desc')
        .where('userId', '==', userId)
        .limit(10)
           
    )
  }e

  createPost(userId: string, data: Post) {
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    const doc = { userId, createdAt, ...data }
    return this.postsRef.add(doc)
  }

  deletePost(id: string) {
    return this.postsRef.doc(id).delete()
  }

}
