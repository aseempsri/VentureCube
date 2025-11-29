import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../components/ui/button.component';
import { CardComponent } from '../components/ui/card.component';
import { IconComponent } from '../components/ui/icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, CardComponent, IconComponent],
  template: `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZ6TTM0IDMydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div class="container mx-auto px-4 py-20 relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div [class]="'space-y-6 ' + (isVisible ? 'animate-fade-in' : 'opacity-0')">
              <div class="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                SEBI Registered Financial Advisors
              </div>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span *ngFor="let word of heroWords; let i = index" 
                      [class]="'inline-block ' + (wordVisible[i] ? 'animate-word-in' : 'opacity-0')">
                  <span [class]="word.isGradient ? 'gradient-text' : ''">{{ word.text }}</span>
                  <span *ngIf="i < heroWords.length - 1">&nbsp;</span>
                </span>
              </h1>
              <p class="text-lg text-muted-foreground max-w-xl">
                Expert financial consultancy services helping individuals and businesses achieve their 
                wealth goals through strategic planning and smart investments.
              </p>
              <div class="flex flex-wrap gap-4">
                <a routerLink="/contact">
                  <app-button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
                    Start Your Journey
                    <app-icon name="arrow-right" [size]="18" class="ml-2 inline-flex"></app-icon>
                  </app-button>
                </a>
                <a routerLink="/services">
                  <app-button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Explore Services
                  </app-button>
                </a>
              </div>
              <div class="flex items-center gap-8 pt-4">
                <div class="flex -space-x-2">
                  <div *ngFor="let avatar of clientAvatars; let i = index" 
                       class="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-gradient-to-br from-primary to-secondary relative shadow-sm">
                    <img 
                      [src]="avatar" 
                      [alt]="'Happy Client ' + (i + 1)"
                      class="w-full h-full object-cover"
                      loading="lazy"
                      (error)="onImageError($event)"
                    />
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  </div>
                </div>
                <div>
                  <p class="text-sm font-semibold text-foreground">5000+ Happy Clients</p>
                  <p class="text-xs text-muted-foreground">Trusted across India</p>
                </div>
              </div>
            </div>
            
            <div [class]="'relative ' + (isVisible ? 'animate-scale-in' : 'opacity-0')">
              <div class="relative">
                <div class="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" [style.animation-delay]="'1s'"></div>
                <app-card className="p-8 backdrop-blur-sm bg-card/50 shadow-elegant border-2">
                  <div class="space-y-6">
                    <div class="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <p class="text-sm text-muted-foreground">Portfolio Value</p>
                        <p class="text-2xl font-bold gradient-text">₹45,67,890</p>
                      </div>
                      <div class="p-3 bg-green-100 rounded-full">
                        <app-icon name="trending-up" [size]="24" class="text-green-600"></app-icon>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="p-4 bg-primary/10 rounded-lg">
                        <p class="text-xs text-muted-foreground mb-1">Returns (1Y)</p>
                        <p class="text-xl font-bold text-primary">+24.5%</p>
                      </div>
                      <div class="p-4 bg-secondary/10 rounded-lg">
                        <p class="text-xs text-muted-foreground mb-1">SIP Active</p>
                        <p class="text-xl font-bold text-secondary">12</p>
                      </div>
                    </div>
                  </div>
                </app-card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-16 bg-gradient-to-r from-primary via-secondary to-accent">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div *ngFor="let stat of stats; let i = index" class="text-center" [style.animation-delay]="(i * 0.1) + 's'">
              <h3 class="text-4xl md:text-5xl font-bold text-white mb-2">{{ stat.value }}</h3>
              <p class="text-white/90 font-medium">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="py-20 bg-background">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Our <span class="gradient-text">Services</span>
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions designed to help you achieve your goals
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              *ngFor="let service of services; let i = index"
              class="service-card"
              [style.animation-delay]="(i * 0.1) + 's'"
              [class]="isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'"
            >
              <app-card
                className="relative p-6 group cursor-pointer border-2 border-border/60 hover:border-primary overflow-hidden bg-gradient-to-br from-card via-card to-muted/30 h-full transition-all duration-500 backdrop-blur-sm"
              >
                <!-- Background pattern -->
                <div class="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzMzZWEiPjxwYXRoIGQ9Ik0zNiAzNHYyaDJWMzZ6TTM0IDMydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
                
                <!-- Subtle gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>
                
                <!-- Glow effect -->
                <div class="service-card-glow"></div>
                
                <!-- Shimmer effect -->
                <div class="service-card-shimmer"></div>
                
                <!-- Card content -->
                <div class="service-card-inner relative z-10">
                  <div class="service-card-icon w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/50 relative">
                    <!-- Subtle icon glow in default state -->
                    <div class="absolute inset-0 rounded-xl bg-gradient-primary opacity-20 blur-md"></div>
                    <app-icon [name]="service.icon" [size]="32" class="relative z-10"></app-icon>
                  </div>
                  <h3 class="text-xl font-bold mb-2 text-foreground/90 group-hover:text-primary transition-colors duration-300">
                    {{ service.title }}
                  </h3>
                  <p class="text-muted-foreground/80 group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {{ service.description }}
                  </p>
                  
                  <!-- Arrow indicator -->
                  <div class="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span class="text-sm font-semibold">Learn more</span>
                    <app-icon name="arrow-right" [size]="16" class="ml-2"></app-icon>
                  </div>
                </div>
              </app-card>
            </div>
          </div>

          <div class="text-center mt-12">
            <a routerLink="/services">
              <app-button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services
                <app-icon name="arrow-right" [size]="16" class="ml-2 inline-flex"></app-icon>
              </app-button>
            </a>
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="py-20 bg-muted">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span class="gradient-text">Venture Cube</span>?
              </h2>
              <p class="text-lg text-muted-foreground mb-8">
                We combine expertise, transparency, and personalized service to help you achieve 
                financial success. Our client-first approach ensures your goals are always our priority.
              </p>
              <div class="space-y-4">
                <div *ngFor="let feature of features" class="flex items-center gap-3">
                  <app-icon name="check-circle" [size]="24" class="text-primary flex-shrink-0"></app-icon>
                  <span class="text-foreground font-medium">{{ feature }}</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <app-card className="p-6 text-center hover:shadow-elegant transition-all">
                <app-icon name="target" [size]="48" class="mx-auto mb-4 text-primary"></app-icon>
                <h3 class="font-bold text-2xl mb-2">Goal-Based</h3>
                <p class="text-sm text-muted-foreground">Planning aligned with your life goals</p>
              </app-card>
              <app-card className="p-6 text-center hover:shadow-elegant transition-all mt-8">
                <app-icon name="users" [size]="48" class="mx-auto mb-4 text-secondary"></app-icon>
                <h3 class="font-bold text-2xl mb-2">Expert Team</h3>
                <p class="text-sm text-muted-foreground">SEBI certified advisors</p>
              </app-card>
              <app-card className="p-6 text-center hover:shadow-elegant transition-all">
                <app-icon name="award" [size]="48" class="mx-auto mb-4 text-accent"></app-icon>
                <h3 class="font-bold text-2xl mb-2">Award Winning</h3>
                <p class="text-sm text-muted-foreground">Recognized excellence</p>
              </app-card>
              <app-card className="p-6 text-center hover:shadow-elegant transition-all mt-8">
                <app-icon name="heart-handshake" [size]="48" class="mx-auto mb-4 text-primary"></app-icon>
                <h3 class="font-bold text-2xl mb-2">Trust & Care</h3>
                <p class="text-sm text-muted-foreground">Your success is our mission</p>
              </app-card>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZ6TTM0IDMydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts and discover how we can help you 
            achieve your financial goals.
          </p>
          <a routerLink="/contact">
            <app-button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8">
              Get Free Consultation
              <app-icon name="arrow-right" [size]="20" class="ml-2 inline-flex"></app-icon>
            </app-button>
          </a>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  isVisible = false;
  heroWords: { text: string; isGradient: boolean }[] = [
    { text: 'Building', isGradient: false },
    { text: 'Your', isGradient: false },
    { text: 'Financial', isGradient: true },
    { text: 'Future', isGradient: true },
    { text: 'with', isGradient: false },
    { text: 'Confidence', isGradient: false }
  ];
  wordVisible: boolean[] = [];
  
  clientAvatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces'
  ];

  services = [
    {
      icon: 'trending-up',
      title: 'Wealth Management',
      description: 'Comprehensive wealth strategies tailored to your financial goals and aspirations.',
    },
    {
      icon: 'piggy-bank',
      title: 'Mutual Funds & SIP',
      description: 'Smart investment solutions starting from ₹500/month to build long-term wealth.',
    },
    {
      icon: 'shield',
      title: 'Insurance Planning',
      description: 'Secure your family\'s future with comprehensive life and health insurance solutions.',
    },
    {
      icon: 'file-text',
      title: 'Tax Planning',
      description: 'Optimize your tax liabilities with expert planning and compliant strategies.',
    },
    {
      icon: 'bar-chart-3',
      title: 'Portfolio Management',
      description: 'Active portfolio monitoring and rebalancing for optimal returns.',
    },
    {
      icon: 'wallet',
      title: 'Retirement Planning',
      description: 'Build a secure retirement corpus with strategic long-term planning.',
    },
  ];

  stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '5000+', label: 'Happy Clients' },
    { value: '₹500Cr+', label: 'Assets Under Management' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  features = [
    'SEBI Registered Financial Advisors',
    'Transparent Fee Structure',
    'Personalized Financial Plans',
    'Regular Portfolio Reviews',
    '24/7 Customer Support',
    'Goal-Based Planning',
  ];

  ngOnInit() {
    this.isVisible = true;
    // Small delay to ensure component is rendered
    setTimeout(() => {
      this.animateWords();
    }, 100);
  }

  animateWords() {
    // Reset all words to invisible
    this.wordVisible = new Array(this.heroWords.length).fill(false);
    
    // Animate words one by one
    this.heroWords.forEach((_, index) => {
      setTimeout(() => {
        this.wordVisible[index] = true;
      }, index * 150); // 150ms delay between each word
    });
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }
}

