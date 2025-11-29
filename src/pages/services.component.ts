import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../components/ui/button.component';
import { CardComponent } from '../components/ui/card.component';
import { IconComponent } from '../components/ui/icon.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, CardComponent, IconComponent],
  template: `
    <div class="min-h-screen pt-20">
      <!-- Hero Section -->
      <section class="py-20 bg-gradient-to-br from-muted to-background">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Our <span class="gradient-text">Services</span>
          </h1>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions designed to help you achieve your dreams. 
            From wealth creation to protection, we've got you covered.
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-card *ngFor="let service of services" className="p-8 hover:shadow-elegant transition-all duration-300 group border-2 hover:border-primary">
              <div [class]="'w-20 h-20 rounded-2xl bg-gradient-to-br ' + service.color + ' flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg'">
                <app-icon [name]="service.icon" [size]="40"></app-icon>
              </div>
              <h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-muted-foreground mb-6">{{ service.description }}</p>
              <div class="space-y-2">
                <p class="text-sm font-semibold text-foreground">Key Features:</p>
                <ul class="space-y-1">
                  <li *ngFor="let feature of service.features" class="text-sm text-muted-foreground flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </app-card>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-20 bg-muted">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Our <span class="gradient-text">Process</span>
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent approach to achieving your financial goals
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div *ngFor="let item of processSteps" class="text-center">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-3xl font-extrabold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30 relative">
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 blur-sm opacity-50"></div>
                <span class="relative z-10 drop-shadow-lg">{{ item.step }}</span>
              </div>
              <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
              <p class="text-muted-foreground">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <app-card className="p-12 text-center bg-gradient-to-br from-primary via-secondary to-accent">
            <h2 class="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your financial goals
            </p>
            <a routerLink="/contact">
              <app-button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
                Schedule Free Consultation
              </app-button>
            </a>
          </app-card>
        </div>
      </section>
    </div>
  `,
})
export class ServicesComponent {
  services = [
    { icon: 'trending-up', title: 'Wealth Management', description: 'Comprehensive wealth management solutions tailored to your financial goals. We help you grow, protect, and transfer your wealth efficiently.', features: ['Portfolio Diversification', 'Risk Management', 'Asset Allocation', 'Regular Reviews'], color: 'from-primary to-secondary' },
    { icon: 'piggy-bank', title: 'Mutual Funds & SIP', description: 'Invest systematically with as little as ₹500/month. Build wealth through disciplined investing in carefully selected mutual funds.', features: ['Equity Funds', 'Debt Funds', 'Hybrid Funds', 'Tax Saving Funds'], color: 'from-secondary to-accent' },
    { icon: 'shield', title: 'Insurance Planning', description: 'Secure your family\'s future with comprehensive life, health, and general insurance solutions tailored to your needs.', features: ['Term Insurance', 'Health Insurance', 'Critical Illness', 'Child Plans'], color: 'from-accent to-primary' },
    { icon: 'file-text', title: 'Tax Planning', description: 'Optimize your tax liabilities through strategic planning and investment in tax-efficient instruments while staying compliant.', features: ['Section 80C', '80D Planning', 'Capital Gains', 'Tax Optimization'], color: 'from-primary to-secondary' },
    { icon: 'bar-chart-3', title: 'Portfolio Management', description: 'Active monitoring and rebalancing of your investment portfolio to ensure optimal returns aligned with your risk profile.', features: ['Regular Monitoring', 'Rebalancing', 'Performance Reports', 'Strategy Updates'], color: 'from-secondary to-accent' },
    { icon: 'wallet', title: 'Retirement Planning', description: 'Build a secure retirement corpus through strategic long-term planning. Enjoy your golden years without financial worries.', features: ['NPS Planning', 'Pension Funds', 'Annuity Plans', 'Corpus Building'], color: 'from-accent to-primary' },
    { icon: 'home', title: 'Loan Advisory', description: 'Expert guidance on home loans, personal loans, and business loans. Get the best rates and terms for your borrowing needs.', features: ['Home Loans', 'Personal Loans', 'Business Loans', 'Loan Restructuring'], color: 'from-primary to-secondary' },
    { icon: 'graduation-cap', title: 'Education Planning', description: 'Plan for your child\'s education with systematic savings and investment strategies for a bright future.', features: ['Education Savings', 'Study Abroad', 'Fee Planning', 'Scholarship Guidance'], color: 'from-secondary to-accent' },
    { icon: 'building-2', title: 'Real Estate Advisory', description: 'Make informed decisions in property investments with expert guidance on residential and commercial real estate.', features: ['Property Analysis', 'REIT Investments', 'Market Research', 'Legal Support'], color: 'from-accent to-primary' },
    { icon: 'coins', title: 'Gold Investment', description: 'Invest in gold through various instruments - physical gold, gold ETFs, sovereign gold bonds, and digital gold.', features: ['Gold ETFs', 'Sovereign Bonds', 'Digital Gold', 'Physical Gold'], color: 'from-primary to-secondary' },
    { icon: 'credit-card', title: 'Fixed Income', description: 'Stable returns through fixed deposits, bonds, and debt instruments suitable for conservative investors.', features: ['Fixed Deposits', 'Corporate Bonds', 'Government Securities', 'Debt Funds'], color: 'from-secondary to-accent' },
    { icon: 'users', title: 'Estate Planning', description: 'Ensure smooth transfer of wealth to the next generation with proper will, trust, and succession planning.', features: ['Will Drafting', 'Trust Formation', 'Succession Planning', 'Wealth Transfer'], color: 'from-accent to-primary' },
  ];

  processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understanding your goals and current financial situation' },
    { step: '02', title: 'Planning', desc: 'Creating a customized financial roadmap' },
    { step: '03', title: 'Implementation', desc: 'Executing the plan with right investment products' },
    { step: '04', title: 'Monitoring', desc: 'Regular reviews and adjustments as needed' },
  ];
}

