import { Component, Input } from '@angular/core';
import { FcmProvider } from '../../providers/fcm/fcm';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'fcm-topic',
  templateUrl: 'fcm-topic.html'
})
export class FcmTopicComponent {

  @Input() user: any;
  @Input() topic: string;

  constructor(public fcm: FcmProvider, private platform: Platform) { }

  get isSubscribed() {
    return this.user.topics && this.user.topics[this.topic];
  }

  get isSupportedPlatform() {
    return this.platform.is('cordova');
  }

}
