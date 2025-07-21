import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'trendLine';
  currentLang = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar'); // Start with Arabic by default
    this.translate.use('ar'); // Load Arabic

    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      document.documentElement.setAttribute(
        'dir',
        this.isArabic ? 'rtl' : 'ltr'
      );
      document.documentElement.lang = this.currentLang;
    });
  }

  get isArabic(): boolean {
    return this.currentLang === 'ar';
  }
}
