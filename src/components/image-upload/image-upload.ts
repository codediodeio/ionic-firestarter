import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { ModalController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.html'
})
export class ImageUploadComponent {

  @Input() userId;

  @Output() downloadURL: string;

  task: AngularFireUploadTask;
  image: string;

  constructor(
    private storage: AngularFireStorage,
    private modalCtrl: ModalController,
    private camera: Camera
  ) { }

  startUpload(file: string) {

    const path = `${this.userId}/${new Date().getTime()}`;

    // The main task
    this.image = 'data:image/jpg;base64,' + file;
    this.task = this.storage.ref(path).putString(this.image, 'data_url'); 
  }

  showModal() {
    let uploadModal = this.modalCtrl.create(Upload, { task: this.task });
    uploadModal.present();
  }

  async captureAndUpload() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    const base64 = await this.camera.getPicture(options)

    this.startUpload(base64);
  }

}

@Component({
  template: `
    <p>Please wait... Upload is 
    
      <ion-badge item-end>{{ progress | async }}%</ion-badge> complete
    
    </p>
    
  `
})
class Upload {

  progress;

  constructor(params: NavParams) {
    console.log(JSON.stringify( params.get('uploadTask') ))

    this.progress = params.get('uploadTask').percentChanges();
  }

}
