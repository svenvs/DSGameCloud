import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/organisms/header/header.component';
import { SidebarComponent } from './components/organisms/sidebar/sidebar.component';
import { GameListingComponent } from './components/organisms/gameListing/gameListing.component';

@Component({
  standalone: true,
  imports: [ RouterModule, SidebarComponent, HeaderComponent, GameListingComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DSGameCloud';
}