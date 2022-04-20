// components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './components/form/form.component';

// modules
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// prime ng
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SignupComponent } from './pages/signup/signup.component';
import { CalendarModule } from 'primeng/calendar';
import { ProfileComponent } from './pages/profile/profile.component';
import { ToastModule } from 'primeng/toast';
import { FeedComponent } from './pages/feed/feed.component';
import { httpInterceptorProviders } from './https-interceptors/interceptorsProvider';
import { AgePipe } from './pipe/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    FormComponent,
    SignupComponent,
    ProfileComponent,
    FeedComponent,
    AgePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    ToastModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
