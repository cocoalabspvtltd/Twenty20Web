import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthInterceptorService } from './service/auth.interceptor.service';// Adjust the path based on your structure
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    ApplyComponent,
    EventsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UserDashboardComponent,
   
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,BrowserAnimationsModule,FormsModule,NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), Location, {provide: LocationStrategy, useClass:HashLocationStrategy}, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
