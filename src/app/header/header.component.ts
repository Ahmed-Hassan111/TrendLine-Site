import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ar');
    translate.use('ar'); // You can change to 'en' if needed
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
