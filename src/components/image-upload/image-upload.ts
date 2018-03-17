import { Component, Input, Output, EventEmitter } from "@angular/core";
import { filter, tap } from "rxjs/operators";

import { ModalController, NavParams, ViewController } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";

import {
  AngularFireStorage,
  AngularFireUploadTask
} from "angularfire2/storage";

@Component({
  selector: "image-upload",
  templateUrl: "image-upload.html"
})
export class ImageUploadComponent {
  @Input() userId;

  @Output() uploadFinished = new EventEmitter();

  task: AngularFireUploadTask;
  image: string;

  constructor(
    private storage: AngularFireStorage,
    private modalCtrl: ModalController,
    private camera: Camera
  ) {}

  startUpload(file: string) {
    const path = `${this.userId}/${new Date().getTime()}`;

    // The main task
    this.image = "data:image/jpg;base64," + file;
    this.task = this.storage.ref(path).putString(this.image, "data_url");

    // Define and present the modal component
    let uploadModal = this.modalCtrl.create(UploadModal, { task: this.task });
    uploadModal.present();

    // Listen to the progress, when 100% dismiss the modal
    this.task
      .percentageChanges()
      .pipe(
        filter(val => val === 100),
        tap(complete => {
          uploadModal.dismiss();
        })
      )
      .subscribe();

    // Listen for the Download URL
    this.task
      .downloadURL()
      .pipe(tap(url => this.uploadFinished.emit(url)))
      .subscribe();
  }

  async captureAndUpload() {
    const options: CameraOptions = {
      quality: 33,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    const base64 = await this.camera.getPicture(options);

    this.startUpload(base64);
  }
}

@Component({
  template: `

  <ion-header>
  
    <ion-navbar>
      <ion-title>Uploading to Firebase...</ion-title>
    </ion-navbar>
  
  </ion-header>

  <ion-content padding text-center>
    <p>Upload is 
    
      <ion-badge item-end>{{ progress | async | number }}%</ion-badge> complete
      
    </p>

    <button ion-button color="danger" (tap)="cancel()">Cancel</button>
    </ion-content>
  `
})
export class UploadModal {
  task;
  progress;

  constructor(params: NavParams, public viewCtrl: ViewController) {
    this.task = params.get("task");
    this.progress = this.task.percentageChanges();
  }

  cancel() {
    this.task.cancel();
    this.viewCtrl.dismiss();
  }
}
