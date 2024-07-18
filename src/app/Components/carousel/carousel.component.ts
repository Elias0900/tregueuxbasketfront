import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  imports: [CommonModule],
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images: { imageSrc: string, imageAlt: string }[] = [];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  selectedIndex: number = 0;

  selectedImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    } else {
      this.selectedIndex = this.images.length - 1;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
    } else {
      this.selectedIndex = 0;
    }
  }

  getPreviousIndex(): number {
    return (this.selectedIndex - 1 + this.images.length) % this.images.length;
  }

  getNextIndex(): number {
    return (this.selectedIndex + 1 + this.images.length) % this.images.length;
  }



}
