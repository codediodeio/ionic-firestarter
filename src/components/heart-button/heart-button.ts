import { Component, Input } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { DatabaseProvider } from '../../providers/database/database';


@Component({
  selector: 'heart-button',
  templateUrl: 'heart-button.html'
})
export class HeartButtonComponent {

  @Input() userId: string; 
  @Input() post: any; 

  constructor(public db: DatabaseProvider) {}


  get heartCount(): number {
    return Object.keys(this.post.hearts).length
  }

  get isHearted(): boolean {
    return !!(this.post.hearts && this.post.hearts[this.userId])
  }
 
}
