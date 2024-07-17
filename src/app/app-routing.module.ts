import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { HomeComponent } from './Components/home/home.component';
import { EquipeComponent } from './Components/equipe/equipe.component';
import { NavBarModule } from './Components/nav-bar/nav-bar.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipe', component: EquipeComponent }
];

@NgModule({
  declarations: [
    AppComponent, // Déclarez AppComponent ici
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    NavBarModule,
    CarouselComponent, // Importez votre composant standalone ici
    HomeComponent, // Assurez-vous que HomeComponent est un composant standalone
    EquipeComponent // Assurez-vous que EquipeComponent est un composant standalone
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
