import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px) scale(0.9)' }),
        animate(
          '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateY(0) scale(1)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '0.3s ease-in-out',
          style({ opacity: 0, transform: 'translateY(20px) scale(0.9)' })
        ),
      ]),
    ]),
  ],
})
export class ChatbotComponent implements OnInit, OnDestroy {
  isOpen = false;
  isTyping = false;
  phoneNumber = '+96877463736';
  showChatbot = true; // New flag to control chatbot visibility
  private routerSubscription: Subscription;

  services = [
    {
      id: 1,
      name: 'تصميم QR Code',
      message: 'مرحبا، أريد عمل QR Code لعلامتي التجارية.',
      icon: '🔳',
    },
    {
      id: 2,
      name: 'تصميم موقع إلكتروني',
      message: 'مرحبا، أريد تصميم موقع إلكتروني.',
      icon: '🌐',
    },
    {
      id: 3,
      name: 'استشارة تقنية',
      message: 'مرحبا، أحتاج استشارة تقنية لمشروعي.',
      icon: '💡',
    },
    {
      id: 4,
      name: 'الخاص بالشركه QR Code',
      message: 'عرض QR Code',
      icon: '📱',
    },
  ];

  constructor(private router: Router) {
    // Initialize subscription to router events
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is '/qr-code'
        this.showChatbot = event.urlAfterRedirects !== '/qr-code';
      }
    });
  }

  ngOnInit() {
    // Initial check for the current route
    this.showChatbot = this.router.url !== '/qr-code';
  }

  ngOnDestroy() {
    // Clean up the subscription to prevent memory leaks
    this.routerSubscription.unsubscribe();
  }

  toggleChat() {
    if (!this.showChatbot) return; // Prevent toggling if chatbot is hidden
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.simulateTyping();
    }
  }

  simulateTyping() {
    this.isTyping = true;
    setTimeout(() => {
      this.isTyping = false;
    }, 1500);
  }

  onServiceClick(service: any) {
    if (service.id === 4) {
      this.router.navigate(['/qr-code']);
    } else {
      const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(
        service.message
      )}`;
      window.open(url, '_blank');
    }
    this.isOpen = false;
  }

  closeChat() {
    this.isOpen = false;
  }

  trackByServiceId(index: number, service: any): number {
    return service.id;
  }
}
