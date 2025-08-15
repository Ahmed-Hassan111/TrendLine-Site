import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-content-and-design',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './content-and-design.component.html',
  styleUrl: './content-and-design.component.css',
})
export class ContentAndDesignComponent {
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
