import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router'; // Ensure this import is used

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Register RouterOutlet as an import
  template: '<router-outlet></router-outlet>', // Inline template
  styleUrls: ['./app.component.css'],
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
