import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation/navigation-bar.component';
import { NavigationRailComponent } from './navigation/navigation-rail.component';
import { NavigationDrawerComponent } from "./navigation/navigation-drawer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, NavigationRailComponent, NavigationDrawerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
