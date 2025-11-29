import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ButtonComponent } from './ui/button.component';
import { IconComponent } from './ui/icon.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent],
  template: `
    <nav
      [class]="'fixed top-0 w-full z-50 transition-all duration-300 ' + (isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-card' : 'bg-transparent')"
    >
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          <a routerLink="/" class="flex items-center gap-3 group">
            <img
              [src]="logoPath"
              alt="Venture Cube"
              class="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
            />
            <span class="text-2xl font-extrabold gradient-text">
              Venture Cube
            </span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <a
              *ngFor="let link of navLinks"
              [routerLink]="link.path"
              routerLinkActive="text-primary"
              [routerLinkActiveOptions]="{exact: link.path === '/'}"
              [class]="'text-sm font-medium transition-colors relative group ' + (currentPath === link.path ? 'text-primary' : 'text-foreground hover:text-primary')"
            >
              {{ link.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <app-button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
              Get Started
            </app-button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden p-2 text-foreground"
            (click)="toggleMenu()"
            type="button"
          >
            <app-icon *ngIf="!isOpen" [name]="'menu'" [size]="24"></app-icon>
            <app-icon *ngIf="isOpen" [name]="'x'" [size]="24"></app-icon>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div *ngIf="isOpen" class="md:hidden py-4 animate-fade-in">
          <div class="flex flex-col gap-4">
            <a
              *ngFor="let link of navLinks"
              [routerLink]="link.path"
              (click)="closeMenu()"
              [class]="'text-sm font-medium py-2 ' + (currentPath === link.path ? 'text-primary' : 'text-foreground')"
            >
              {{ link.name }}
            </a>
            <app-button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Get Started
            </app-button>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen = false;
  isScrolled = false;
  currentPath = '/';
  logoPath = 'assets/venture-cube-logo.png';
  private routerSubscription?: Subscription;

  navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentPath = this.router.url;
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentPath = event.url;
      });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
}

