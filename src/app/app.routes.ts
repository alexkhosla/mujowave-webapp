import { Routes } from '@angular/router';
import { Home } from './home';
import { AppPage } from './app-page';
import { BetaPage } from './beta-page';
import { Privacy } from './privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'app', component: AppPage },
  { path: 'beta', component: BetaPage },
  { path: 'privacy', component: Privacy },
  { path: '**', redirectTo: '' },
];
