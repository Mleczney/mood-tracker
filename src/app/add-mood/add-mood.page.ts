import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoodService } from '../services/mood.service';

import {
  IonContent, IonHeader, IonButton,
  IonToolbar, IonTitle, IonTextarea, IonItem, IonLabel,
  IonSegment, IonSegmentButton } from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-mood',
  standalone: true,
imports: [ IonContent, IonHeader, IonToolbar, IonTitle, IonButton,
  IonItem, IonLabel, IonTextarea,
  IonSegment, IonSegmentButton,
  FormsModule
],

  templateUrl: './add-mood.page.html',
  styleUrls: ['./add-mood.page.scss']
})
export class AddMoodPage {

  selectedMood: number = 3;
  note: string = '';

  constructor(private moodService: MoodService, private router: Router) {}

  save() {
    const entry = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      mood: this.selectedMood,
      note: this.note
    };

    this.moodService.addMood(entry);
    this.router.navigateByUrl('history');
  }
}
