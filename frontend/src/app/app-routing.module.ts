import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogoutGuard } from './guard/logout.guard';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostComponent } from './pages/post/post.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserConfigComponent } from './pages/user-config/user-config.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'entrar', component: LoginComponent },
  { path: 'cadastrar', component: SignupComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'posts/:name/:title', component: PostComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'sair', canActivate: [LogoutGuard], component: LoginComponent },
  { path: 'config', component: UserConfigComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
