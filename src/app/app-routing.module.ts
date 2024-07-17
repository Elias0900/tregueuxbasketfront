import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Components/home/home.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EquipeComponent } from './Components/equipe/equipe.component';
import { CarouselModule } from './Components/carousel/carousel.module';
import { CarouselComponent } from './Components/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquipeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})

export class AppRoutingModule { }
