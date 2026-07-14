import { Routes } from '@angular/router';
import { Home } from './home';
import { AppPage } from './app-page';
import { HardwarePage } from './hardware-page';
import { BetaPage } from './beta-page';
import { Privacy } from './privacy';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Mujowave — sailing instruments for your phone',
    data: {
      description:
        'Sailing instruments for your phone: GPS speed over ground, compass heading, heel and trim. Free Android app, now in beta.',
    },
  },
  {
    path: 'app',
    component: AppPage,
    title: 'Sailing instrument app for Android — Mujowave',
    data: {
      description:
        'GPS speedometer, marine heading tape, heel and trim indicator for Android phones and tablets. Works offline — no accounts, no ads, no tracking.',
    },
  },
  {
    path: 'hardware',
    component: HardwarePage,
    title: 'Marine hardware — Mujowave',
    data: {
      description:
        'Smart lights and wireless environment sensors for boats, with app pairing and over-the-air firmware updates. In development.',
    },
  },
  {
    path: 'beta',
    component: BetaPage,
    title: 'Join the free beta — Mujowave',
    data: {
      description:
        'Join the Mujowave beta in about two minutes: join the tester group, become a tester on Google Play, and install the free sailing instrument app.',
    },
  },
  {
    path: 'privacy',
    component: Privacy,
    title: 'Privacy policy — Mujowave',
    data: {
      description:
        'Mujowave keeps your data on your phone: no accounts, no ads, no tracking, and no cloud transmission of GPS or sensor data.',
    },
  },
  { path: '**', redirectTo: '' },
];
