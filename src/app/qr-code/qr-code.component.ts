import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-qr-code',
  imports: [CommonModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css',
})
export class QrCodeComponent {
  contactItems = [
    {
      label: 'Instagram',
      icon: 'assets/icons/instagram.png',
      link: 'https://www.instagram.com/1_trendline?igsh=MWozdXBianF3ZGU3Yw==',
    },
    {
      label: 'WhatsApp',
      icon: 'assets/icons/whatsapp.png',
      link: 'http://wa.me/96877463736',
    },
    {
      label: 'TikTok',
      icon: 'assets/icons/tiktok.png',
      link: 'https://tiktok.com',
    },
    {
      label: 'Website',
      icon: 'assets/icons/facebook.png',
      link: 'https://www.facebook.com/profile.php?id=61578164207163',
    },
    {
      label: 'Google<br>Maps',
      icon: 'assets/icons/maps.png',
      link: 'https://maps.google.com',
    },
    {
      label: 'Company<br>Profile',
      icon: 'assets/icons/web.png',
      link: '#',
    },
    // {
    //   label: 'Email',
    //   icon: 'assets/icons/gmail.png',
    //   link: 'mailto:trendline.oman@gmail.com',
    // },
    {
      label: 'Gmail',
      icon: 'assets/icons/gmail.png',
      link: 'mailto:trendline.oman@gmail.com',
    },
  ];
}
