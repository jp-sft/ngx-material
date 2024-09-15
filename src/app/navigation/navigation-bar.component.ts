import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'btkui-navigation-bar',
  standalone: true,
  template: `
    <mat-toolbar class="navigation-bar">
      <button
        mat-button
        *ngFor="let item of navItems; let i = index"
        class="nav-item"
        [ngClass]="{
          'active': activeIndex === i
        }"
        (click)="onItemClick(i)"
      >
        <mat-icon>{{ item.icon }}</mat-icon>
        <span class="label" *ngIf="item.label">{{ item.label }}</span>
        <span *ngIf="item.badge" class="badge">{{ item.badge }}</span>
      </button>
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

    .nav-item {
      color: var(--sys-on-surface);
      font: var(--sys-label-medium);
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: background-color 0.2s, color 0.2s;
    }

    .nav-item.active {
      background-color: var(--sys-primary-container);
      color: var(--sys-on-primary-container);
    }

    .badge {
      background-color: var(--sys-error);
      color: var(--sys-on-error);
      border-radius: 8px;
      padding: 2px 4px;
      font-size: 10px;
      margin-left: 8px;
    }

    mat-icon {
      font-size: 24px;
    }
  `],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule]
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
