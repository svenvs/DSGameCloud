import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesktopMenu } from './components/molecules/desktopMenu/desktopMenu.component';
import { MobileMenu } from './components/molecules/mobileMenu/mobileMenu.component';
import { HeaderComponent } from './components/organisms/header/header.component';

@Component({
  standalone: true,
  imports: [ RouterModule, DesktopMenu, MobileMenu, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DSGameCloud';
}