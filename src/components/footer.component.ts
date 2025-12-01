import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from './ui/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <footer class="bg-muted border-t border-border">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- Brand -->
          <div>
            <a routerLink="/" class="flex items-center gap-3 mb-4">
              <img [src]="logoPath" alt="Venture Cube" class="h-10 w-10" />
              <span class="text-xl brand-font gradient-text">Venture Cube</span>
            </a>
            <p class="text-sm text-muted-foreground mb-4">
              Your trusted partner for comprehensive financial consultancy services in India. 
              Building wealth, securing futures.
            </p>
            <div class="flex gap-3">
              <a href="#" class="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <app-icon name="facebook" [size]="18"></app-icon>
              </a>
              <a href="#" class="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <app-icon name="twitter" [size]="18"></app-icon>
              </a>
              <a href="#" class="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <app-icon name="linkedin" [size]="18"></app-icon>
              </a>
              <a href="#" class="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <app-icon name="instagram" [size]="18"></app-icon>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a routerLink="/" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a routerLink="/services" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a routerLink="/about" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a routerLink="/contact" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="font-semibold text-foreground mb-4">Our Services</h3>
            <ul class="space-y-2">
              <li class="text-sm text-muted-foreground">Wealth Management</li>
              <li class="text-sm text-muted-foreground">Mutual Funds</li>
              <li class="text-sm text-muted-foreground">Insurance Planning</li>
              <li class="text-sm text-muted-foreground">Tax Planning</li>
              <li class="text-sm text-muted-foreground">Retirement Planning</li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-2 text-sm text-muted-foreground">
                <app-icon name="map-pin" [size]="18" class="flex-shrink-0 mt-0.5"></app-icon>
                <span>Mumbai, Maharashtra 410221</span>
              </li>
              <li class="flex items-center gap-2 text-sm text-muted-foreground">
                <app-icon name="phone" [size]="18" class="flex-shrink-0"></app-icon>
                <span>+91 98154 61615</span>
              </li>
              <li class="flex items-center gap-2 text-sm text-muted-foreground">
                <app-icon name="mail" [size]="18" class="flex-shrink-0"></app-icon>
                <span>{{ email }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-border pt-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-muted-foreground">
              © {{ currentYear }} Venture Cube. All rights reserved.
            </p>
            <div class="flex gap-6 text-sm text-muted-foreground">
              <a href="#" class="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" class="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  logoPath = 'assets/venture-cube-logo.png';
  currentYear = new Date().getFullYear();
  email = 'info@venturecube.in';
}

