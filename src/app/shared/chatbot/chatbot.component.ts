import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
export class ChatbotComponent {
  isOpen = false;
  isTyping = false;
  phoneNumber = '+96877463736';

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
      name: 'عرض QR Code',
      message: 'عرض QR Code', // يمكن تستخدمها للتحقق أو تبقي فارغة
      icon: '📱',
    },
  ];

  constructor(private router: Router) {}

  toggleChat() {
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

  // openWhatsApp(message: string) {
  //   const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(
  //     message
  //   )}`;
  //   window.open(url, '_blank');
  //   this.isOpen = false;
  // }
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
