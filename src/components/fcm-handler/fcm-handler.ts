import { Component, OnInit } from "@angular/core";
import { FcmProvider } from "../../providers/fcm/fcm";
import { ToastController } from "ionic-angular";
import { tap } from "rxjs/operators";

@Component({
  selector: "fcm-handler",
  templateUrl: "fcm-handler.html"
})
export class FcmHandlerComponent implements OnInit {
  constructor(private fcm: FcmProvider, private toastCtrl: ToastController) {}

  ngOnInit() {
    // Get the initial token
    this.fcm.getToken();

    // Update on refresh
    this.fcm.monitorTokenRefresh().subscribe();

    // Listen to incoming messages
    this.fcm
      .listenToNotifications()
      .pipe(
        tap(msg => {
          // show a toast
          if (msg) {
            const toast = this.toastCtrl.create({
              message: msg.body,
              duration: 3000
            });
            toast.present();
          }
        })
      )
      .subscribe();
  }
}
