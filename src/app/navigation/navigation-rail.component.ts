import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NavItemComponent } from './nav-item.component';
import { FabComponent } from "../shared/fab.component"; // Import NavItemComponent

@Component({
  selector: 'btkui-navigation-rail',
  standalone: true,
  template: `
<mat-sidenav-container class="navigation-rail-container">
  <mat-sidenav mode="side" opened class="navigation-rail mat-elevation-z4">
    <div class="menu-icon-container">  
      <button
          mat-icon-button
          *ngIf="menuIcon"
          class="menu-icon"
          aria-label="Menu"
          (click)="onMenuClick()"
        >
          <mat-icon>{{ menuIcon }}</mat-icon>
        </button>
    </div>
    <btkui-fab
        *ngIf="fabIcon"
        [icon]="fabIcon"
        (fabClick)="onFabClick()"
      ></btkui-fab>
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
  </mat-sidenav>
</mat-sidenav-container>

  `,
  styleUrls: ['./navigation-rail.component.scss'],
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatIconModule, MatDividerModule, NavItemComponent, FabComponent]
})
export class NavigationRailComponent {
  @Input() navItems = [
    { icon: 'folder', label: 'All Files', badge: '' },
    { icon: 'access_time', label: 'Recent', badge: '' },
    { icon: 'photo', label: 'Photos', badge: '3' },
    { icon: 'library_books', label: 'Library', badge: '' },
  ];

  @Input() menuIcon: string = 'menu'; // Optional menu icon
  @Input() fabIcon: string = 'edit';  // Optional Floating Action Button

  activeIndex = 0;

  onItemClick(index: number) {
    this.activeIndex = index;
  }

  onMenuClick() {
    console.log('Menu icon clicked');
  }

  onFabClick() {
    console.log('FAB icon clicked');
  }
}
