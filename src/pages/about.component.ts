import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../components/ui/button.component';
import { CardComponent } from '../components/ui/card.component';
import { IconComponent } from '../components/ui/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, CardComponent, IconComponent],
  template: `
    <div class="min-h-screen pt-20">
      <!-- Hero Section -->
      <section class="py-20 bg-gradient-to-br from-muted to-background">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              About <span class="gradient-text">Venture Cube</span>
            </h1>
            <p class="text-xl text-muted-foreground leading-relaxed">
              We are a team of dedicated financial professionals committed to helping individuals 
              and families achieve financial freedom through informed decisions and strategic planning.
            </p>
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-12">
            <app-card className="p-10 hover:shadow-elegant transition-all border-2">
              <div class="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white mb-6">
                <app-icon name="target" [size]="32"></app-icon>
              </div>
              <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
              <p class="text-lg text-muted-foreground leading-relaxed">
                To empower individuals and businesses with expert financial guidance, helping them 
                build sustainable wealth and achieve their life goals through transparent, ethical, 
                and personalized financial planning services.
              </p>
            </app-card>

            <app-card className="p-10 hover:shadow-elegant transition-all border-2">
              <div class="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center text-white mb-6">
                <app-icon name="eye" [size]="32"></app-icon>
              </div>
              <h2 class="text-3xl font-bold mb-4">Our Vision</h2>
              <p class="text-lg text-muted-foreground leading-relaxed">
                To be India's most trusted financial advisory firm, recognized for our integrity, 
                expertise, and commitment to client success. We envision a future where every Indian 
                has access to quality financial advice and achieves financial independence.
              </p>
            </app-card>
          </div>
        </div>
      </section>

      <!-- Values -->
      <section class="py-20 bg-muted">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Our <span class="gradient-text">Core Values</span>
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <app-card *ngFor="let value of values" className="p-6 text-center hover:shadow-elegant transition-all group border-2 hover:border-primary h-full flex flex-col">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                <app-icon [name]="value.icon" [size]="32"></app-icon>
              </div>
              <h3 class="text-xl font-bold mb-3 flex-shrink-0">{{ value.title }}</h3>
              <p class="text-muted-foreground text-sm flex-grow">{{ value.description }}</p>
            </app-card>
          </div>
        </div>
      </section>

      <!-- Journey/Timeline -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Our <span class="gradient-text">Journey</span>
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that mark our growth and commitment to excellence
            </p>
          </div>

          <div class="relative">
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
            
            <div class="space-y-12">
              <div *ngFor="let milestone of milestones; let i = index" 
                   [class]="'flex items-center gap-8 ' + (i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')">
                <div [class]="'flex-1 ' + (i % 2 === 0 ? 'md:text-right' : 'md:text-left')">
                  <app-card className="p-6 hover:shadow-elegant transition-all inline-block">
                    <h3 class="text-3xl font-bold gradient-text mb-2">
                      {{ milestone.year }}
                    </h3>
                    <p class="text-foreground font-medium">{{ milestone.event }}</p>
                  </app-card>
                </div>
                <div class="hidden md:block w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>
                <div class="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Achievements -->
      <section class="py-20 bg-muted">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-4xl md:text-5xl font-bold mb-4">
                <span class="gradient-text">Achievements</span> & Recognition
              </h2>
              <p class="text-lg text-muted-foreground">
                Certifications and accolades that showcase our expertise
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div *ngFor="let achievement of achievements" class="flex items-start gap-4 p-6 bg-background rounded-lg">
                <app-icon name="check-circle" [size]="24" class="text-primary flex-shrink-0 mt-1"></app-icon>
                <p class="text-foreground font-medium">{{ achievement }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold mb-6">
                Why Clients <span class="gradient-text">Trust Us</span>
              </h2>
              <div class="space-y-6">
                <app-card *ngFor="let item of trustItems" className="p-6 hover:shadow-card transition-all">
                  <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                  <p class="text-muted-foreground">{{ item.desc }}</p>
                </app-card>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div class="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
              <app-card className="p-8 relative backdrop-blur-sm bg-card/90 shadow-elegant border-2">
                <div class="text-center space-y-8">
                  <div>
                    <app-icon name="trending-up" [size]="64" class="mx-auto text-primary mb-4"></app-icon>
                    <h3 class="text-5xl font-bold gradient-text mb-2">₹500Cr+</h3>
                    <p class="text-muted-foreground">Assets Under Management</p>
                  </div>
                  <div class="grid grid-cols-2 gap-6">
                    <div class="p-4 bg-muted rounded-lg">
                      <p class="text-3xl font-bold text-primary mb-1">5000+</p>
                      <p class="text-sm text-muted-foreground">Happy Clients</p>
                    </div>
                    <div class="p-4 bg-muted rounded-lg">
                      <p class="text-3xl font-bold text-secondary mb-1">98%</p>
                      <p class="text-sm text-muted-foreground">Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
              </app-card>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your Financial Future Together
          </h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their financial goals
          </p>
          <a routerLink="/contact">
            <app-button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
              Start Your Journey Today
            </app-button>
          </a>
        </div>
      </section>
    </div>
  `,
})
export class AboutComponent {
  values = [
    { icon: 'shield', title: 'Integrity', description: "We operate with complete transparency and put our clients' interests first in every decision." },
    { icon: 'heart', title: 'Client-Centric', description: "Your financial success and peace of mind are at the heart of everything we do." },
    { icon: 'award', title: 'Excellence', description: 'We strive for excellence in service delivery and maintain the highest professional standards.' },
    { icon: 'users', title: 'Collaboration', description: 'We work as partners with our clients, building long-term relationships based on trust.' },
  ];

  milestones = [
    { year: '2008', event: 'Company Founded' },
    { year: '2012', event: 'SEBI Registration Achieved' },
    { year: '2015', event: 'Crossed ₹100 Cr AUM' },
    { year: '2018', event: 'Expanded to 5 Cities' },
    { year: '2020', event: '5000+ Clients Milestone' },
    { year: '2023', event: '₹500 Cr+ AUM' },
  ];

  achievements = [
    'SEBI Registered Investment Advisor',
    'ISO 9001:2015 Certified',
    'Member of Association of Mutual Funds in India (AMFI)',
    'Best Financial Advisory Firm 2023 - India Finance Awards',
    '15+ Years of Industry Experience',
    '98% Client Retention Rate',
  ];

  trustItems = [
    { title: 'Expert Team', desc: 'SEBI registered advisors with 15+ years of combined experience in financial markets' },
    { title: 'Personalized Approach', desc: 'Custom financial plans tailored to your unique goals, risk profile, and life stage' },
    { title: 'Transparent Process', desc: 'Clear communication, no hidden charges, complete visibility into your investments' },
    { title: 'Ongoing Support', desc: 'Regular portfolio reviews, market updates, and 24/7 customer support' },
  ];
}

