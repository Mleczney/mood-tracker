import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'add-mood',
    loadComponent: () => import('./add-mood/add-mood.page').then(m => m.AddMoodPage)
  },
  {
    path: 'history',
    loadComponent: () => import('./history/history.page').then(m => m.HistoryPage)
  },
  {
    path: '',
    redirectTo: 'add-mood',
    pathMatch: 'full'
  }
];
