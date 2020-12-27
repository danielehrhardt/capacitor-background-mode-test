import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      var bg = window.cordova.plugins.backgroundMode;
      bg.setDefaults({
        text: 'App is running in background',
        hidden: false,
        color: '0098D9',
        icon: 'power',
        allowClose: true,
        channelDescription: 'Keep the App running in the background',
        channelName: 'Keep running in background',
        subText: 'Small hint text',
        showWhen: false,
      });
      bg.enable();
      bg.on('activate', () => {
        bg.disableWebViewOptimizations();
      });
      bg.disableBatteryOptimizations();
      bg.moveToBackground();
    });
  }
}
