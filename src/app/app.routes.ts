import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home.component';
import { AboutComponent } from '../pages/about.component';
import { ServicesComponent } from '../pages/services.component';
import { ContactComponent } from '../pages/contact.component';
import { NotFoundComponent } from '../pages/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];
