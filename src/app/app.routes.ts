import { Routes } from '@angular/router';
import { Home } from './home';
import { AppPage } from './app-page';
import { HardwarePage } from './hardware-page';
import { BetaPage } from './beta-page';
import { Privacy } from './privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'app', component: AppPage },
  { path: 'hardware', component: HardwarePage },
  { path: 'beta', component: BetaPage },
  { path: 'privacy', component: Privacy },
  { path: '**', redirectTo: '' },
];
