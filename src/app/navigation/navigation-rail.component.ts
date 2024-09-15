import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'btkui-navigation-rail',
  standalone: true,
  template: `
    <mat-sidenav-container class="navigation-rail-container">
  <mat-sidenav mode="side" opened class="navigation-rail mat-elevation-z4">
    <button
      mat-icon-button
      *ngIf="menuIcon"
      class="menu-icon"
      aria-label="Menu"
      (click)="onMenuClick()"
    >
      <mat-icon>{{ menuIcon }}</mat-icon>
    </button>
    <div class="fab-container">
    <button
      *ngIf="fabIcon"
      mat-fab
      class="fab"
      aria-label="Action"
      (click)="onFabClick()"
    >
      <mat-icon>{{ fabIcon }}</mat-icon>
    </button>
</div>
    <ng-container *ngFor="let item of navItems; let i = index">
      <div class="nav-item-wrapper">
        <button
          mat-button
          class="nav-item"
          [ngClass]="{ 
            'active': activeIndex === i, 
            'hovered': hoveredIndex === i,
            'focused': focusedIndex === i,
            'pressed': pressedIndex === i
          }"
          (click)="onItemClick(i)"
          (mouseenter)="onItemHover(i)"
          (mouseleave)="onItemLeave()"
          (mousedown)="onItemPress(i)"
          (mouseup)="onItemRelease()"
          (focus)="onItemFocus(i)"
          (blur)="onItemBlur()"
        >
          <mat-icon>{{ item.icon }}</mat-icon>
          <span *ngIf="item.badge" class="badge">{{ item.badge }}</span>
        </button>
        <span class="label" *ngIf="item.label">{{ item.label }}</span>
      </div>
    </ng-container>
    
  </mat-sidenav>
</mat-sidenav-container>

  `,
  styleUrls: ['./navigation-rail.component.scss'],
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatIconModule, MatDividerModule]
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
  hoveredIndex = -1;
  focusedIndex = -1;
  pressedIndex = -1;

  onItemClick(index: number) {
    this.activeIndex = index;
  }

  onItemHover(index: number) {
    this.hoveredIndex = index;
  }

  onItemLeave() {
    this.hoveredIndex = -1;
  }

  onItemPress(index: number) {
    this.pressedIndex = index;
  }

  onItemRelease() {
    this.pressedIndex = -1;
  }

  onItemFocus(index: number) {
    this.focusedIndex = index;
  }

  onItemBlur() {
    this.focusedIndex = -1;
  }

  onMenuClick() {
    console.log('Menu icon clicked');
  }

  onFabClick() {
    console.log('FAB icon clicked');
  }
}
