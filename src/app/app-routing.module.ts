import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';     // Add this
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoverAccountComponent } from './pages/recover-account/recover-account.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recover', component: RecoverAccountComponent},
  { path: 'create', component: CreateAccountComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
