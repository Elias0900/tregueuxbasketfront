import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface CarouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']  // Correction ici
})
export class CarouselComponent implements OnInit {

  @Input() images: CarouselImage[] = [];  // Utilisation de la bonne interface
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000 /* par défaut 3 s */


  selectedIndex = 0;

  ngOnInit(): void {
    // Logique d'initialisation si nécessaire

    if(this.autoSlide){
      this.autoSlideImage()
    }
  }


  // gère l'index de l'image sur le click de l'indicateur
  selectedImage(index: number): void {
    this.selectedIndex = index
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length -1;
    } else {
      this.selectedIndex--;
    }
  }

  /** Change l'image toutes les 3 secondes */
  autoSlideImage(): void{
    setInterval(() => {
      this.onNextClick();
    },this.slideInterval);
  }


  onNextClick(): void{
    if(this.selectedIndex === this.images.length -1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
