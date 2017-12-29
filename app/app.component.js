"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var firebase1 = require("nativescript-plugin-firebase");
var PushNotifications = require("nativescript-push-notifications");
var AppComponent = (function () {
    // Your TypeScript logic goes here
    function AppComponent() {
        console.log("Hello World");
    }
    AppComponent.prototype.ngOnInit = function () {
        this.firebaseInitialize();
    };
    AppComponent.prototype.registerpush = function ($event) {
        this.firebaseInitialize();
    };
    AppComponent.prototype.pushnotification = function () {
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
    };
    AppComponent.prototype.firebaseInitialize = function () {
        firebase.init({
            persist: true,
            onMessageReceivedCallback: function (message) {
                console.log(message);
                setTimeout(function () {
                    dialogs_1.alert({
                        title: "Push message!",
                        message: (message.title !== undefined ? message.body : ""),
                        okButtonText: "ok"
                    });
                }, 500);
            },
            onPushTokenReceivedCallback: function (token) {
                // you can use this token to send to your own backend server,
                // so you can send notifications to this specific device
                console.log("Firebase plugin received a push token: " + token);
                // this is for iOS, to copy the token onto the clipboard
            }
        }).then(function (instance) {
            console.log(instance);
            console.log("Firebase is ready");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    };
    AppComponent.prototype.onTap = function ($event) {
        this.doGetCurrentPushToken();
    };
    AppComponent.prototype.doGetCurrentPushToken = function () {
        firebase.getCurrentPushToken().then(function (token) {
            // may be null if not known yet
            console.log("Current push token: " + token);
            dialogs_1.alert({
                title: "Current Push Token",
                message: (token === null ? "Not received yet" : token),
                okButtonText: "OK, thx"
            });
        });
    };
    AppComponent.prototype.onTapunregister = function ($event) {
        this.doUnregisterForPushNotifications();
    };
    AppComponent.prototype.doUnregisterForPushNotifications = function () {
        firebase1.unregisterForPushNotifications().then(function () {
            dialogs_1.alert({
                title: "Unregistered",
                message: "If you were registered, that is.",
                okButtonText: "Got it, thanks!"
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./app.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsdURBQXlEO0FBR3pELHVEQUE0RDtBQUc1RCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMxRCxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBTXJFO0lBQ0Usa0NBQWtDO0lBQ2xDO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFLRCxtQ0FBWSxHQUFaLFVBQWEsTUFBTTtRQUNqQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0gsdUNBQWdCLEdBQWhCO1FBQ0Usc0RBQXNEO1FBQ3RELGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0Isa0JBQWtCO1FBQ2xCLHVDQUF1QztRQUN2Qyx1QkFBdUI7UUFDdkIsc0NBQXNDO1FBQ3RDLDRCQUE0QjtRQUM1QixxQ0FBcUM7UUFDckMsV0FBVztRQUNYLHlDQUF5QztRQUN6Qyx5QkFBeUI7UUFDekIsc0NBQXNDO1FBQ3RDLDJCQUEyQjtRQUMzQixxQ0FBcUM7UUFDckMsVUFBVTtRQUNWLHFCQUFxQjtRQUNyQixxQ0FBcUM7UUFDckMsNEVBQTRFO1FBQzVFLDJFQUEyRTtRQUMzRSxTQUFTO1FBQ1QsT0FBTztRQUNQLHVDQUF1QztRQUN2QyxvREFBb0Q7UUFDcEQsTUFBTTtRQUVOLEtBQUs7UUFDTCwwQ0FBMEM7UUFDMUMsc0NBQXNDO1FBQ3RDLHVCQUF1QjtRQUN2QixpRkFBaUY7UUFDakYsZ0JBQWdCO1FBQ2hCLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIsTUFBTTtJQUNSLENBQUM7SUFFQyx5Q0FBa0IsR0FBbEI7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1osT0FBTyxFQUFDLElBQUk7WUFDWix5QkFBeUIsRUFBRSxVQUFDLE9BQXlCO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQixVQUFVLENBQUM7b0JBQ1QsZUFBSyxDQUFDO3dCQUNKLEtBQUssRUFBRSxlQUFlO3dCQUN0QixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzt3QkFDMUQsWUFBWSxFQUFFLElBQUk7cUJBQ25CLENBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDVixDQUFDO1lBQ0QsMkJBQTJCLEVBQUUsVUFBQSxLQUFLO2dCQUNoQyw2REFBNkQ7Z0JBQzdELHdEQUF3RDtnQkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDL0Qsd0RBQXdEO1lBRTFELENBQUM7U0FDRixDQUVBLENBQUMsSUFBSSxDQUNKLFVBQUMsUUFBUTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FDQSxDQUFDO0lBQ04sQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxNQUFXO1FBQ2YsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNNLDRDQUFxQixHQUE1QjtRQUNFLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDdkMsK0JBQStCO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDNUMsZUFBSyxDQUFDO2dCQUNKLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLE9BQU8sRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO2dCQUN0RCxZQUFZLEVBQUUsU0FBUzthQUN4QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxzQ0FBZSxHQUF0QixVQUF1QixNQUFXO1FBQ2hDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFBO0lBQ3pDLENBQUM7SUFDTSx1REFBZ0MsR0FBdkM7UUFDRSxTQUFTLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxJQUFJLENBQzdDO1lBQ0UsZUFBSyxDQUFDO2dCQUNKLEtBQUssRUFBRSxjQUFjO2dCQUNyQixPQUFPLEVBQUUsa0NBQWtDO2dCQUMzQyxZQUFZLEVBQUUsaUJBQWlCO2FBQ2hDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJIVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsWUFBWTtTQUUxQixDQUFDOztPQUNXLFlBQVksQ0F1SHhCO0lBQUQsbUJBQUM7Q0FBQSxBQXZIRCxJQXVIQztBQXZIWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZsZXhib3hMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xuLy9pbXBvcnQgKiBhcyBwdXNocGx1Z2luIGZyb20gXCJuYXRpdmVzY3JpcHQtcHVzaC1ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgaW9zIGFzIGlvc1V0aWxzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmNvbnN0IGZpcmViYXNlMSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuY29uc3QgUHVzaE5vdGlmaWNhdGlvbnMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXB1c2gtbm90aWZpY2F0aW9uc1wiKTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuaHRtbFwiLFxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZFwiKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlyZWJhc2VJbml0aWFsaXplKCk7XG4gIH1cblxuXG4gIG5vdGlmaWNhdGlvbkNhbGxiYWNrSU9TOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIHJlZ2lzdGVycHVzaCgkZXZlbnQpOnZvaWR7XG4gICAgdGhpcy5maXJlYmFzZUluaXRpYWxpemUoKTtcbiAgfVxucHVzaG5vdGlmaWNhdGlvbigpe1xuICAvLyBsZXQgc2V0dGluZ3MgOnB1c2hwbHVnaW4uSW9zUmVnaXN0cmF0aW9uT3B0aW9ucyA9IHtcbiAgLy8gICBiYWRnZTogdHJ1ZSxcbiAgLy8gICBzb3VuZDogdHJ1ZSxcbiAgLy8gICBhbGVydDogdHJ1ZSxcbiAgLy8gICBjbGVhckJhZGdlOnRydWUsXG4gIC8vICAgaW50ZXJhY3RpdmVTZXR0aW5nczoge1xuICAvLyAgICAgYWN0aW9uczogW3tcbiAgLy8gICAgICAgaWRlbnRpZmllcjogJ1JFQURfSURFTlRJRklFUicsXG4gIC8vICAgICAgIHRpdGxlOiAnUmVhZCcsXG4gIC8vICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcbiAgLy8gICAgICAgZGVzdHJ1Y3RpdmU6IGZhbHNlLFxuICAvLyAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXG4gIC8vICAgICB9LCB7XG4gIC8vICAgICAgIGlkZW50aWZpZXI6ICdDQU5DRUxfSURFTlRJRklFUicsXG4gIC8vICAgICAgIHRpdGxlOiAnQ2FuY2VsJyxcbiAgLy8gICAgICAgYWN0aXZhdGlvbk1vZGU6IFwiZm9yZWdyb3VuZFwiLFxuICAvLyAgICAgICBkZXN0cnVjdGl2ZTogdHJ1ZSxcbiAgLy8gICAgICAgYXV0aGVudGljYXRpb25SZXF1aXJlZDogdHJ1ZVxuICAvLyAgICAgfV0sXG4gIC8vICAgICBjYXRlZ29yaWVzOiBbe1xuICAvLyAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9DQVRFR09SWScsXG4gIC8vICAgICAgIGFjdGlvbnNGb3JEZWZhdWx0Q29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXSxcbiAgLy8gICAgICAgYWN0aW9uc0Zvck1pbmltYWxDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddXG4gIC8vICAgICB9XVxuICAvLyAgIH0sXG4gIC8vICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tJT1M6IGRhdGEgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJEQVRBOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgLy8gICB9XG4gICBcbiAgLy8gfTtcbiAgLy8gcHVzaHBsdWdpbi5yZWdpc3RlcihzZXR0aW5ncywgZGF0YSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCJSRUdJU1RSQVRJT04gSUQ6IFwiIClcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAvL1B1c2hOb3RpZmljYXRpb25zLm9uTWVzc2FnZVJlY2VpdmVkKHNldHRpbmdzLm5vdGlmaWNhdGlvbkNhbGxiYWNrQW5kcm9pZCk7XG4gIC8vIH0sIGVycm9yID0+IHtcbiAgLy8gICBhbGVydChcImVycm9yLm1lc3NhZ2VcIik7XG4gIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyB9KTtcbn1cblxuICBmaXJlYmFzZUluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICBwZXJzaXN0OnRydWUsXG4gICAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogZmlyZWJhc2UuTWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiUHVzaCBtZXNzYWdlIVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogKG1lc3NhZ2UudGl0bGUgIT09IHVuZGVmaW5lZCA/IG1lc3NhZ2UuYm9keSA6IFwiXCIpLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIm9rXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0sXG4gICAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6IHRva2VuID0+IHtcbiAgICAgICAgLy8geW91IGNhbiB1c2UgdGhpcyB0b2tlbiB0byBzZW5kIHRvIHlvdXIgb3duIGJhY2tlbmQgc2VydmVyLFxuICAgICAgICAvLyBzbyB5b3UgY2FuIHNlbmQgbm90aWZpY2F0aW9ucyB0byB0aGlzIHNwZWNpZmljIGRldmljZVxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIHBsdWdpbiByZWNlaXZlZCBhIHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xuICAgICAgICAvLyB0aGlzIGlzIGZvciBpT1MsIHRvIGNvcHkgdGhlIHRva2VuIG9udG8gdGhlIGNsaXBib2FyZFxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgKS50aGVuKFxuICAgICAgKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBpcyByZWFkeVwiKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgb25UYXAoJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRvR2V0Q3VycmVudFB1c2hUb2tlbigpO1xuICB9XG4gIHB1YmxpYyBkb0dldEN1cnJlbnRQdXNoVG9rZW4oKTogdm9pZCB7XG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFB1c2hUb2tlbigpLnRoZW4odG9rZW4gPT4ge1xuICAgICAgLy8gbWF5IGJlIG51bGwgaWYgbm90IGtub3duIHlldFxuICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xuICAgICAgYWxlcnQoe1xuICAgICAgICB0aXRsZTogXCJDdXJyZW50IFB1c2ggVG9rZW5cIixcbiAgICAgICAgbWVzc2FnZTogKHRva2VuID09PSBudWxsID8gXCJOb3QgcmVjZWl2ZWQgeWV0XCIgOiB0b2tlbiksXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgdGh4XCJcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uVGFwdW5yZWdpc3RlcigkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZG9VbnJlZ2lzdGVyRm9yUHVzaE5vdGlmaWNhdGlvbnMoKVxuICB9XG4gIHB1YmxpYyBkb1VucmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9ucygpOiB2b2lkIHtcbiAgICBmaXJlYmFzZTEudW5yZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb25zKCkudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgYWxlcnQoe1xuICAgICAgICAgIHRpdGxlOiBcIlVucmVnaXN0ZXJlZFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiSWYgeW91IHdlcmUgcmVnaXN0ZXJlZCwgdGhhdCBpcy5cIixcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0LCB0aGFua3MhXCJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=