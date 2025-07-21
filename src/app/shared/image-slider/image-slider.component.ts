import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  currentIndex = 0;
  angle = 0;
  rotation = 0;
  intervalId: any;

  ngOnInit(): void {
    if (this.images.length > 0) {
      this.angle = 360 / this.images.length;
    }
    this.intervalId = setInterval(() => this.next(), 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.rotation -= this.angle;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.rotation += this.angle;
  }

  getImageTransform(index: number): string {
    const rotate = index * this.angle + this.rotation;
    return `rotateY(${rotate}deg) translateZ(500px)`;
  }
}
