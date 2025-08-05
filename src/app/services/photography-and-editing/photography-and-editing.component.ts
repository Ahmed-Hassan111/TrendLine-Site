import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-photography-and-editing',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './photography-and-editing.component.html',
  styleUrl: './photography-and-editing.component.css',
})
export class PhotographyAndEditingComponent {
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
