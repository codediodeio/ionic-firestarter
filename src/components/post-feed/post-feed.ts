import { Component, OnInit, Input } from '@angular/core';
import { DatabaseProvider, Post } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'post-feed',
  templateUrl: 'post-feed.html'
})
export class PostFeedComponent implements OnInit {

  @Input() userId: string;  

  posts: Observable<any[]>;

  constructor(private db: DatabaseProvider, public auth: AuthProvider) { }

  ngOnInit() {
    // if (this.userId) {
      // this.posts = this.db.getUserPosts(this.userId).valueChanges()
    // } 
    // else {
    //   this.posts = this.db.getRecentPosts().valueChanges();
    // }
    this.posts = this.db.getRecentPosts().snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    )
    // this.posts.subscribe(console.log)
  }

}
