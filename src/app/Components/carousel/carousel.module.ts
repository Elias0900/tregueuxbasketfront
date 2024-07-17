import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule, CarouselComponent
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
