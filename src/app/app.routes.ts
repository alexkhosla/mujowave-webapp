import { Routes } from '@angular/router';
import { Home } from './home';
import { HardwarePage } from './hardware-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Mujowave — marine electronics for sailors',
    data: {
      description:
        'Marine electronics for sailors. Smart lights and wireless environment sensors for boats, currently in development.',
    },
  },
  {
    path: 'hardware',
    component: HardwarePage,
    title: 'Marine hardware — Mujowave',
    data: {
      description:
        'Smart lights and wireless environment sensors for boats. Mujowave marine hardware is currently in development.',
    },
  },
  { path: 'app', redirectTo: '', pathMatch: 'full' },
  { path: 'beta', redirectTo: '', pathMatch: 'full' },
  { path: 'privacy', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
