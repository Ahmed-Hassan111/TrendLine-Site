import {
  Component,
  AfterViewInit,
  HostListener,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  SlickCarouselModule,
  SlickCarouselComponent,
} from 'ngx-slick-carousel';
import { ImageSliderComponent } from '../shared/image-slider/image-slider.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { OnInit } from '@angular/core';
import { EncodeUriPipe } from '../encode-uri.pipe';
import { CarouselComponent } from '../shared/carousel/carousel.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    SlickCarouselModule,
    EncodeUriPipe,
    ImageSliderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', animate('0.5s ease-out')),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  showScrollButton: boolean = false;
  currentLang: string = 'ar'; // قيمة مبدئية مؤقتة
  state = 'active';
  whatsappAdUrl = '';

  constructor(private translate: TranslateService) {}

  reasons = [
    { text: 'Home.WhyChooseUSReason1' },
    { text: 'Home.WhyChooseUSReason2' },
    { text: 'Home.WhyChooseUSReason3' },
    { text: 'Home.WhyChooseUSReason4' },
  ];

  heroImages = [
    'assets/images/slid1.jpg',
    'assets/images/slid2.JPG',
    'assets/images/slid5.jpg',
    'assets/images/slid4.jpg',
    'assets/images/slid7.png',
    'assets/images/slid8.png',
    'assets/images/slid10.JPG',
  ];

  ngOnInit() {
    this.currentLang = this.translate.currentLang || 'ar';
    this.setWhatsAppAdMessage();
  }
  setWhatsAppAdMessage() {
    const currentLang = this.translate.currentLang || 'en';
    let message = '';

    if (currentLang === 'ar') {
      message = 'مرحبا، أود الاستفسار عن الإعلانات.';
    } else {
      message = 'Hi, I would like to inquire about Ads.';
    }

    this.whatsappAdUrl =
      'https://wa.me/96877463736?text=' + encodeURIComponent(message);
  }

  ngAfterViewInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const heroSection = document.querySelector('.hero-section');
    const scrollY = window.scrollY;

    if (heroSection) {
      const sectionBottom =
        heroSection.getBoundingClientRect().bottom + window.scrollY;
      this.showScrollButton = scrollY > sectionBottom;
    } else {
      this.showScrollButton = scrollY > 400; // fallback
    }
  }

  scrollArrowAction(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
