import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/Shared/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  isDarkMode = false;

  constructor(
    private themeService: ThemeService,
  ) {
    this.themeService.isDarkMode$.subscribe(mode => {
      this.isDarkMode = mode;
    });
  }

}