import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'btkui-fab',
  standalone: true,
  template: `
    <button mat-fab class="fab" aria-label="Floating Action Button" (click)="onClick()">
      <mat-icon>{{ icon }}</mat-icon>
    </button>
  `,
  styleUrls: ['./fab.component.scss'],
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class FabComponent {
  @Input() icon: string = 'edit'; // Default icon
  @Output() fabClick = new EventEmitter<void>();

  onClick() {
    this.fabClick.emit();
  }
}
