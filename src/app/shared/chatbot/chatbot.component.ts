import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  isOpen = false;
  isTyping = false;
  showChatbot = true;
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
  ];

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

  openWhatsApp(message: string) {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank');
    this.isOpen = false;
  }

  closeChat() {
    this.isOpen = false;
  }

  trackByServiceId(index: number, service: any): number {
    return service.id;
  }
}
