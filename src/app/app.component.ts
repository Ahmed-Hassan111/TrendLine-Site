import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { ChatbotComponent } from './shared/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatbotComponent],
  template: `
    <div [class.rtl]="isArabic" [class.ltr]="!isArabic">
      <router-outlet></router-outlet>
      <app-chatbot></app-chatbot>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'trendLine';
  currentLang = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    this.translate.use('ar');

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
