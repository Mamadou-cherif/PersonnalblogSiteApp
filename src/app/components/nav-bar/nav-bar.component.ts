import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/models/services/auth.service';
import { AppUser } from 'src/app/models/appuser';
import {
  faLightbulb as faSolidLightbulb,
  faDollarSign,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { faLightbulb as faRegularLightbulb } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  faLightbulb: IconDefinition;
  faDollarSign = faDollarSign;

  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.authService.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
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
