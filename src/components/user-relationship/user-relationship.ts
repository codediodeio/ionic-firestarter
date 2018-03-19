import { Component, Input } from '@angular/core';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'user-relationship',
  templateUrl: 'user-relationship.html'
})
export class UserRelationshipComponent {

  @Input() currentUserId; // logged in user
  @Input() followId; // user to be followed/unfollowed

  isOwner: boolean;
  isFollowing: any;

  constructor(public db: DatabaseProvider) { }

  ngOnInit() {
    this.isOwner = this.currentUserId === this.followId;
    
    this.isFollowing = this.db.isFollowing(this.currentUserId, this.followId);
  }


}
