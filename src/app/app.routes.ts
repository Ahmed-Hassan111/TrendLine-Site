import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { BusinessGalleryComponent } from './business-gallery/business-gallery.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Use LayoutComponent as the parent layout
    children: [
      { path: '', component: HomeComponent }, // Default route loads HomeComponent
      { path: 'about', component: AboutComponent }, // Route for About page
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.routes').then((m) => m.servicesRoutes), // Lazy load Services routes
      },
      { path: 'contact', component: ContactComponent }, // Route for Contact page
      { path: 'business-gallery', component: BusinessGalleryComponent }, // Route for Business Gallery page
    ],
  },
  { path: 'qr-code', component: QrCodeComponent }, // Route for QR Code page, without layout
];
