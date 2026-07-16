import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
];
