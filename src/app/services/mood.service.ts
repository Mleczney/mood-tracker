import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface MoodEntry {
  id: number;
  date: string;
  mood: number;
  note?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  private storeReady = false;
  private moods: MoodEntry[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.storeReady = true;

    const data = await this.storage.get('moods');
    this.moods = data || [];
  }

async addMood(entry: MoodEntry) {
  this.moods.unshift(entry); // vloží na začátek
  await this.storage.set('moods', this.moods);
}


async getAll(): Promise<MoodEntry[]> {
  return await this.storage.get('moods') || [];
}


  getByDate(date: string) {
    return this.moods.find(m => m.date === date);
  }
}
