import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'index', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about', component:AboutComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'events', component:EventsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:DashboardComponent, 
    children: [
        { path: '',redirectTo   : 'dashboard', pathMatch: 'full' },
        {path: 'dashboard', component:UserDashboardComponent},
      ]
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
