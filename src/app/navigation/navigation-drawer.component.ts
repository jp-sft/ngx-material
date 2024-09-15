import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'btkui-navigation-drawer',
  standalone: true,
  template: `
    <mat-drawer-container class="drawer-container">
      <mat-drawer #drawer opened mode="side" class="navigation-drawer">
        <mat-nav-list>
          <mat-list-item *ngFor="let item of navItems; let i = index" (click)="onItemClick(i)">
            <mat-icon matListIcon>{{ item.icon }}</mat-icon>
            <span matLine>{{ item.label }}</span>
            <span [matBadge]="item.badge" *ngIf="item.badge" class="badge" matBadgeSize="small" matBadgeColor="warn"></span>
          </mat-list-item>
        </mat-nav-list>
      </mat-drawer>
    </mat-drawer-container>
  `,
  styleUrls: ['./navigation-drawer.component.scss'],
  imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule, MatBadgeModule]
})
export class NavigationDrawerComponent {
  @Input() navItems = [
    { icon: 'home', label: 'Home', badge: '' },
    { icon: 'search', label: 'Search', badge: '3' },
    { icon: 'notifications', label: 'Notifications', badge: '' },
  ];

  onItemClick(index: number) {
    console.log(`Navigation item ${index} clicked`);
  }
}
