import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  imports: [CommonModule],
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  cards = [
    {
      title: 'Strategy',
      content: 'Marketing roadmap and performance',
      imageUrl: 'assets/images/slide1.jpg',
    },
    {
      title: 'Content',
      content: 'High quality visuals & text',
      imageUrl: 'assets/images/slide2.jpg',
    },
    {
      title: 'Engagement',
      content: 'Community moderation',
      imageUrl: 'assets/images/slide3.jpg',
    },
    {
      title: 'Analytics',
      content: 'Performance insights',
      imageUrl: 'assets/images/slide4.jpg',
    },
  ];

  angle = 360 / this.cards.length;
  currentRotation = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentRotation -= this.angle;
    }, 3000); // Auto rotate every 3 sec
  }
}
