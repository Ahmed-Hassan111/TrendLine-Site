import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTranslate } from '../assets/i18n/translate.provider';
import { provideAnimations } from '@angular/platform-browser/animations'; // <-- Add this import

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideTranslate(),
    provideHttpClient(),
    provideAnimations(),
  ],
};
