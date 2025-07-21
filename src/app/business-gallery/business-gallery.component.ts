import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-gallery.component.html',
  styleUrl: './business-gallery.component.css',
})
export class BusinessGalleryComponent {
  // Gallery Title
  title: string = 'معرض أعمالنا';

  // Static list of images and videos (from all services)
  images: string[] = [
    'assets/images/slid1.JPG',
    'assets/images/slid2.JPG',
    'assets/images/slid4.JPG',
    'assets/images/slid5.JPG',
    'assets/images/slid7.PNG',
    'assets/images/slid8.PNG',
    'assets/images/slid10.JPG',
  ];

  videos: string[] = [
    'assets/videos/vidtest.mp4',
    'assets/videos/branding-video.mp4',
  ];
}
