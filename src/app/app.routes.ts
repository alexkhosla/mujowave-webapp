import { Routes } from '@angular/router';
import { Home } from './home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Mujowave',
    data: { description: 'Mujowave.' },
  },
  { path: 'hardware', redirectTo: '', pathMatch: 'full' },
  { path: 'app', redirectTo: '', pathMatch: 'full' },
  { path: 'beta', redirectTo: '', pathMatch: 'full' },
  { path: 'privacy', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
