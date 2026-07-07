import { Routes } from '@angular/router';
import { Home } from './home';
import { Privacy } from './privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'privacy', component: Privacy },
  { path: '**', redirectTo: '' },
];
