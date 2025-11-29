import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar.component';
import { FooterComponent } from '../components/footer.component';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-navbar></app-navbar>
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Venture Cube';
  private scrollService = inject(ScrollService);

  ngOnInit(): void {
    // Service will automatically handle scrolling on route changes
    // Also scroll to top on initial load
    this.scrollService.scrollToTop();
  }
}
