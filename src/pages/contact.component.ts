import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../components/ui/button.component';
import { CardComponent } from '../components/ui/card.component';
import { InputComponent } from '../components/ui/input.component';
import { TextareaComponent } from '../components/ui/textarea.component';
import { IconComponent } from '../components/ui/icon.component';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, CardComponent, InputComponent, TextareaComponent, IconComponent],
  template: `
    <div class="min-h-screen pt-20">
      <!-- Hero Section -->
      <section class="py-20 bg-gradient-to-br from-muted to-background">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Get in <span class="gradient-text">Touch</span>
          </h1>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll 
            respond as soon as possible.
          </p>
        </div>
      </section>

      <!-- Contact Info Cards -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <app-card *ngFor="let info of contactInfo" className="p-8 text-center hover:shadow-elegant transition-all group border-2 hover:border-primary h-full flex flex-col items-center justify-start">
              <div [class]="'w-16 h-16 rounded-2xl bg-gradient-to-br ' + info.color + ' flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform flex-shrink-0'">
                <app-icon [name]="info.icon" [size]="24"></app-icon>
              </div>
              <h3 class="text-lg font-bold mb-4 flex-shrink-0">{{ info.title }}</h3>
              <div class="space-y-2 flex-grow flex flex-col justify-center">
                <p *ngFor="let detail of info.details" class="text-sm text-muted-foreground leading-relaxed">
                  {{ detail }}
                </p>
              </div>
            </app-card>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Left Column: Form and Consultation Card -->
            <div class="space-y-6">
              <!-- Contact Form -->
              <app-card className="p-8 shadow-elegant border-2">
                <h2 class="text-3xl font-bold mb-6">Send us a Message</h2>
                <form (ngSubmit)="handleSubmit($event)" class="space-y-6">
                  <div>
                    <label class="block text-sm font-medium mb-2">Full Name</label>
                    <app-input name="name" [(ngModel)]="formData.name" placeholder="John Doe" [required]="true" className="border-2"></app-input>
                  </div>

                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-2">Email</label>
                      <app-input name="email" type="email" [(ngModel)]="formData.email" placeholder="john@example.com" [required]="true" className="border-2"></app-input>
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-2">Phone</label>
                      <app-input name="phone" type="tel" [(ngModel)]="formData.phone" placeholder="+91 98765 43210" [required]="true" className="border-2"></app-input>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium mb-2">Subject</label>
                    <app-input name="subject" [(ngModel)]="formData.subject" placeholder="How can we help you?" [required]="true" className="border-2"></app-input>
                  </div>

                  <div>
                    <label class="block text-sm font-medium mb-2">Message</label>
                    <app-textarea name="message" [(ngModel)]="formData.message" placeholder="Tell us more about your financial goals..." [rows]="6" [required]="true" className="border-2"></app-textarea>
                  </div>

                  <app-button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
                    Send Message
                    <app-icon name="send" [size]="16" class="ml-2"></app-icon>
                  </app-button>
                </form>
              </app-card>

              <!-- Schedule a Free Consultation Card -->
              <app-card className="p-8 bg-gradient-to-br from-primary via-secondary to-accent border-2 border-primary shadow-elegant">
                <h3 class="text-2xl font-bold text-white mb-4">
                  Schedule a Free Consultation
                </h3>
                <p class="text-white/90 mb-6">
                  Not sure where to start? Book a free 30-minute consultation with our 
                  financial experts to discuss your goals.
                </p>
                <app-button size="lg" className="w-full bg-white text-primary hover:bg-white/90 shadow-lg">
                  Book Appointment
                </app-button>
              </app-card>
            </div>

            <!-- Right Column: Map & Additional Info -->
            <div class="space-y-6">
              <app-card className="p-8 border-2">
                <h2 class="text-3xl font-bold mb-6">Visit Our Office</h2>
                <div class="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
                  <app-icon name="map-pin" [size]="64" class="text-muted-foreground"></app-icon>
                </div>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <app-icon name="map-pin" [size]="20" class="text-primary flex-shrink-0 mt-1"></app-icon>
                    <div>
                      <p class="font-semibold">Head Office</p>
                      <p class="text-sm text-muted-foreground">
                        123 Business Tower, Nariman Point<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </app-card>

              <app-card className="p-8 border-2">
                <h3 class="text-xl font-bold mb-4">Why Choose Venture Cube?</h3>
                <ul class="space-y-3">
                  <li *ngFor="let item of whyChooseItems" class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-primary"></div>
                    <span class="text-sm text-muted-foreground">{{ item }}</span>
                  </li>
                </ul>
              </app-card>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-20 bg-muted">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span class="gradient-text">Questions</span>
            </h2>
          </div>

          <div class="max-w-3xl mx-auto grid gap-6">
            <app-card *ngFor="let faq of faqs" className="p-6 hover:shadow-card transition-all">
              <h3 class="text-lg font-bold mb-2">{{ faq.q }}</h3>
              <p class="text-muted-foreground">{{ faq.a }}</p>
            </app-card>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  contactInfo = [
    { icon: 'phone', title: 'Phone', details: ['+91 98765 43210', '+91 98765 43211'], color: 'from-primary to-secondary' },
    { icon: 'mail', title: 'Email', details: ['info@venturecube.com', 'support@venturecube.com'], color: 'from-secondary to-accent' },
    { icon: 'map-pin', title: 'Office', details: ['123 Business Tower', 'Mumbai, Maharashtra 400001'], color: 'from-accent to-primary' },
    { icon: 'clock', title: 'Working Hours', details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'], color: 'from-primary to-secondary' },
  ];

  whyChooseItems = [
    'SEBI Registered Advisors',
    '15+ Years of Experience',
    'Transparent Fee Structure',
    'Personalized Financial Plans',
    '24/7 Customer Support',
  ];

  faqs = [
    { q: 'How do I get started with financial planning?', a: 'Simply contact us through the form above or call us to schedule a free consultation. We\'ll discuss your goals and create a personalized plan.' },
    { q: 'What are your consultation fees?', a: 'Your first consultation is completely free. After that, our fees are transparent and based on the services you choose. We\'ll discuss this during your consultation.' },
    { q: 'Do you help with tax planning?', a: 'Yes! We provide comprehensive tax planning services to help you optimize your tax liabilities through strategic investments.' },
    { q: 'What is the minimum investment amount?', a: 'You can start investing with as little as ₹500 per month through our SIP plans. There\'s no minimum amount to begin your financial journey with us.' },
  ];

  constructor(private toastService: ToastService) {}

  handleSubmit(event: Event) {
    event.preventDefault();
    this.toastService.show('Message Sent!', 'We\'ll get back to you within 24 hours.');
    this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
  }
}

