// components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './components/form/form.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';

// angular modules
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// pipes
import { AgePipe } from './pipe/age.pipe';

// interceptor
import { httpInterceptorProviders } from './https-interceptors/interceptorsProvider';

// prime ng
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { SpeedDialModule } from 'primeng/speeddial';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';

// quill
import { QuillModule } from 'ngx-quill';
import { PersonInitialsPipe } from './pipe/person-initials.pipe';
import { RandomAvatarBackgroundColorPipe } from './pipe/random-avatar-background-color.pipe';
import { ExtractHtmlTextPipe } from './pipe/extract-html-text.pipe';
import { MinimizePostTextPipe } from './pipe/minimize-post-text.pipe';
import { ConvertToDatePipe } from './pipe/convert-to-date.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserConfigComponent } from './pages/user-config/user-config.component';

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
    PersonInitialsPipe,
    RandomAvatarBackgroundColorPipe,
    ExtractHtmlTextPipe,
    MinimizePostTextPipe,
    ConvertToDatePipe,
    PageNotFoundComponent,
    UserConfigComponent,
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
    SpeedDialModule,
    DialogModule,
    CheckboxModule,
    AvatarModule,
    ChipModule,
    QuillModule.forRoot(),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
