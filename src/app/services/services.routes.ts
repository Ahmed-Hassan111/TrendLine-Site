// src/app/services/services.routes.ts
import { Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { ContentAndDesignComponent } from './content-and-design/content-and-design.component';
import { PhotographyAndEditingComponent } from './photography-and-editing/photography-and-editing.component';
import { AdvertisingCampaignsComponent } from './advertising-campaigns/advertising-campaigns.component';
import { StrategyAndAnalysisComponent } from './strategy-and-analysis/strategy-and-analysis.component';
import { AppAndWebDevelopmentComponent } from './app-and-web-development/app-and-web-development.component';

export const servicesRoutes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      { path: 'account-management', component: AccountManagementComponent },
      { path: 'content-design', component: ContentAndDesignComponent },
      {
        path: 'photography-editing',
        component: PhotographyAndEditingComponent,
      },
      {
        path: 'advertising-campaigns',
        component: AdvertisingCampaignsComponent,
      },
      { path: 'strategy-analysis', component: StrategyAndAnalysisComponent },
      { path: 'web-app-development', component: AppAndWebDevelopmentComponent },
    ],
  },
];
