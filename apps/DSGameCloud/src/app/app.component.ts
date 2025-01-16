import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/organisms/header/header.component';
import { SidebarComponent } from './components/organisms/sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [ RouterModule, SidebarComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DSGameCloud';
}
