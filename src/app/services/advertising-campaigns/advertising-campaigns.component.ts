import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-advertising-campaigns',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './advertising-campaigns.component.html',
  styleUrl: './advertising-campaigns.component.css',
})
export class AdvertisingCampaignsComponent {
  selectedImage: string | null = null;
  currentLang: string = 'ar';

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang || 'ar';
    this.translateService.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  openImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeImage() {
    this.selectedImage = null;
  }
  @HostListener('document:keydown.escape', ['$event'])
    handleEscapeKey(event: KeyboardEvent) {
    this.closeImage();
}
}
