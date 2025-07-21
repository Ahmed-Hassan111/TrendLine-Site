import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.routes').then((m) => m.servicesRoutes),
  },
  { path: 'contact', component: ContactComponent },
  { path: 'qr-code', component: QrCodeComponent },
];
