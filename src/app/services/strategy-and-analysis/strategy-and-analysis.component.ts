import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-strategy-and-analysis',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './strategy-and-analysis.component.html',
  styleUrl: './strategy-and-analysis.component.css',
})
export class StrategyAndAnalysisComponent {
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
