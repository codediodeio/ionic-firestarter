import { Component, OnInit, Input } from '@angular/core';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'post-feed',
  templateUrl: 'post-feed.html'
})
export class PostFeedComponent implements OnInit {

  @Input() userId: string;

  posts: any;

  constructor(private db: DatabaseProvider) { }

  ngOnInit() {
    if (this.userId) {
      this.posts = this.db.getUserPosts(this.userId).valueChanges()
    } else {
      this.posts = this.db.getRecentPosts().valueChanges();
    }

    this.posts.subscribe(console.log)
  }

}
