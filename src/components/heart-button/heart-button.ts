import { Component, Input } from '@angular/core';
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
    return this.post.hearts ? Object.keys(this.post.hearts).length : 0
  }

  get isHearted(): boolean {
    return !!(this.post.hearts && this.post.hearts[this.userId])
  }
 
}
