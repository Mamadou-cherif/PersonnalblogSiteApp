import { Component } from '@angular/core';
import { AuthService } from './models/services/auth.service';
 import { Router } from '@angular/router';

 import {
  faLightbulb as faSolidLightbulb,
  faDollarSign,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { faLightbulb as faRegularLightbulb } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogsite';
  faLightbulb: IconDefinition;
  faDollarSign = faDollarSign;


  constructor(private authService: AuthService,private router: Router,  private themeService: ThemeService
    ) { }

  ngOnInit(): void {

    this.authService.appUser$.subscribe(user => {
      if (!user) {
      return;
      } else {
      const returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) {
      return;
      }
      localStorage.removeItem('returnUrl');
      this.router.navigateByUrl(returnUrl);
      }
      });
  }


  setLightbulb() {
    if (this.themeService.isDarkTheme()) {
      this.faLightbulb = faRegularLightbulb;
    } else {
      this.faLightbulb = faSolidLightbulb;
    }
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    this.setLightbulb();
  }
}
