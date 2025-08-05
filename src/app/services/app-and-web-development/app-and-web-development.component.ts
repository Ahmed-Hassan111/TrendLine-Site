import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-app-and-web-development',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './app-and-web-development.component.html',
  styleUrl: './app-and-web-development.component.css',
})
export class AppAndWebDevelopmentComponent {
  selectedImage: string | null = null;

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
