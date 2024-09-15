import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from './nav-item.component'; // Import the NavItemComponent

@Component({
  selector: 'btkui-navigation-bar',
  standalone: true,
  template: `
    <mat-toolbar class="navigation-bar">
      <ng-container *ngFor="let item of navItems; let i = index">
        <button
          btkui-nav-item
          [icon]="item.icon"
          [label]="item.label"
          [badge]="item.badge"
          [active]="activeIndex === i"
          (itemClick)="onItemClick(i)"
        ></button>
      </ng-container>
    </mat-toolbar>
  `,
  styles: [`
    .navigation-bar {
      background-color: var(--sys-surface);
      color: var(--sys-on-surface);
      height: 80px;
      display: flex;
      justify-content: space-around;
    }
  `],
  imports: [MatToolbarModule, CommonModule, NavItemComponent]
})
export class NavigationBarComponent {
  @Input() navItems = [
    { icon: 'home', label: 'Home', badge: '' },
    { icon: 'search', label: 'Search', badge: '3' },
    { icon: 'notifications', label: 'Notifications', badge: '' },
  ];

  activeIndex = 0;

  onItemClick(index: number) {
    this.activeIndex = index;
  }
}
