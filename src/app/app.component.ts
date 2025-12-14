import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel
  ]
})
export class AppComponent {}
