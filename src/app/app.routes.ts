import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'about', component: About },
];
