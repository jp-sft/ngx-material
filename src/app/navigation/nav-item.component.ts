import { Component, Input, Output, EventEmitter, HostBinding, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRipple, MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'a[btkui-nav-item], button[btkui-nav-item]',
  standalone: true,
  template: `
    <span class="icon-container" matRipple>
      <mat-icon>{{ icon }}</mat-icon>
      <span *ngIf="badge" class="badge">{{ badge }}</span>
    </span>
    <span class="label" *ngIf="label">{{ label }}</span>
  `,
  styleUrls: ['./nav-item.component.scss'],
  imports: [CommonModule, MatIconModule, MatRippleModule],
})
export class NavItemComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() badge: string = '';
  @Input() active: boolean = false;

  @Output() itemClick = new EventEmitter<void>();

  @ViewChild(MatRipple) ripple!: MatRipple;

  hovered = false;
  focused = false;
  pressed = false;

  @HostBinding('class.active') get isActive() {
    return this.active;
  }

  @HostBinding('class.hovered') get isHovered() {
    return this.hovered;
  }

  @HostBinding('class.focused') get isFocused() {
    return this.focused;
  }

  @HostBinding('class.pressed') get isPressed() {
    return this.pressed;
  }

  @HostBinding('class.nav-item-reset') resetClass = true; // Add a class to reset default styles

  // Accessibility bindings
  @HostBinding('attr.role') role = 'button';
  @HostBinding('attr.aria-label') get ariaLabel() {
    return this.label ? `${this.label}` : 'Navigation item';
  }
  @HostBinding('attr.aria-current') get ariaCurrent() {
    return this.active ? 'page' : null;
  }

  // Make the element focusable with the keyboard
  @HostBinding('attr.tabindex') tabindex = 0;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.itemClick.emit();
    this.triggerRipple();
    if (!this.isAnchor()) {
      event.preventDefault(); 
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
  }

  @HostListener('mousedown')
  onMouseDown() {
    this.pressed = true;
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.pressed = false;
  }

  @HostListener('focus')
  onFocus() {
    this.focused = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focused = false;
  }

  private isAnchor(): boolean {
    return (this as any).el.nativeElement.tagName.toLowerCase() === 'a';
  }

  private triggerRipple() {
    const rippleRef = this.ripple.launch({
      centered: true,
      persistent: true,
      animation: {
        enterDuration: 150,
        exitDuration: 150,
      },
    });
    rippleRef.fadeOut();
  }
}
