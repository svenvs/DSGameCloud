import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloWorld } from './components/helloWorld/helloWorld.component';

@Component({
  standalone: true,
  imports: [ RouterModule, HelloWorld],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DSGameCloud';
}
