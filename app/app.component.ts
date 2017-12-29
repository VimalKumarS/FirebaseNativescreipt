import { Component, OnInit } from "@angular/core";
import { FlexboxLayout } from "tns-core-modules/ui/layouts/flexbox-layout";
import * as firebase from "nativescript-plugin-firebase";
//import * as pushplugin from "nativescript-push-notifications";
import { Observable } from "tns-core-modules/data/observable";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { ios as iosUtils } from "tns-core-modules/utils/utils";
import { isIOS } from "tns-core-modules/platform";
const firebase1 = require("nativescript-plugin-firebase");
const PushNotifications = require("nativescript-push-notifications");
@Component({
  selector: "my-app",
  templateUrl: "./app.html",

})
export class AppComponent implements OnInit {
  // Your TypeScript logic goes here
  constructor() {
    console.log("Hello World");
  }

  ngOnInit() {
    this.firebaseInitialize();
  }


  notificationCallbackIOS: (message: string) => void;

  registerpush($event):void{
    this.firebaseInitialize();
  }
pushnotification(){
  // let settings :pushplugin.IosRegistrationOptions = {
  //   badge: true,
  //   sound: true,
  //   alert: true,
  //   clearBadge:true,
  //   interactiveSettings: {
  //     actions: [{
  //       identifier: 'READ_IDENTIFIER',
  //       title: 'Read',
  //       activationMode: "foreground",
  //       destructive: false,
  //       authenticationRequired: true
  //     }, {
  //       identifier: 'CANCEL_IDENTIFIER',
  //       title: 'Cancel',
  //       activationMode: "foreground",
  //       destructive: true,
  //       authenticationRequired: true
  //     }],
  //     categories: [{
  //       identifier: 'READ_CATEGORY',
  //       actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
  //       actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
  //     }]
  //   },
  //   notificationCallbackIOS: data => {
  //     console.log("DATA: " + JSON.stringify(data));
  //   }
   
  // };
  // pushplugin.register(settings, data => {
  //   console.log("REGISTRATION ID: " )
  //   console.log(data);
  //   //PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
  // }, error => {
  //   alert("error.message");
  //   console.log(error);
  // });
}

  firebaseInitialize(): void {
    firebase.init({
      persist:true,
      onMessageReceivedCallback: (message: firebase.Message) => {
        console.log(message);
        setTimeout(() => {
          alert({
            title: "Push message!",
            message: (message.title !== undefined ? message.body : ""),
            okButtonText: "ok"
          });
        }, 500);
      },
      onPushTokenReceivedCallback: token => {
        // you can use this token to send to your own backend server,
        // so you can send notifications to this specific device
        console.log("Firebase plugin received a push token: " + token);
        // this is for iOS, to copy the token onto the clipboard

      }
    }

    ).then(
      (instance) => {
        console.log(instance);
        console.log("Firebase is ready");
      },
      error => {
        console.log("firebase.init error: " + error);
      }
      );
  }

  onTap($event: any): void {
    this.doGetCurrentPushToken();
  }
  public doGetCurrentPushToken(): void {
    firebase.getCurrentPushToken().then(token => {
      // may be null if not known yet
      console.log("Current push token: " + token);
      alert({
        title: "Current Push Token",
        message: (token === null ? "Not received yet" : token),
        okButtonText: "OK, thx"
      });
    });
  }

  public onTapunregister($event: any): void {
    this.doUnregisterForPushNotifications()
  }
  public doUnregisterForPushNotifications(): void {
    firebase1.unregisterForPushNotifications().then(
      () => {
        alert({
          title: "Unregistered",
          message: "If you were registered, that is.",
          okButtonText: "Got it, thanks!"
        });
      });
  }

}
