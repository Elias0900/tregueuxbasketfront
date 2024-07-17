import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './Components/equipe/equipe.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},


    {path: 'equipe', component: EquipeComponent}
];

@NgModule({
    imports: [],
    exports: []
})

export class AppRoutingModule{

}
