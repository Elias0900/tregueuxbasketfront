import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { EquipeComponent } from './Components/equipe/equipe.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];


