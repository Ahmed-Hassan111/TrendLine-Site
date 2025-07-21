import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule, RouterModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  isMainServicesPage = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isMainServicesPage = this.router.url === '/services';
    });
  }
}
