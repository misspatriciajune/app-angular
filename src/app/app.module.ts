import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Angular Material 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import {
  MatButtonModule,
  MatMenuModule,
  MatDialogModule,
  MatExpansionModule,
  MatListModule,
  MatTooltipModule,
  MatRadioModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatSelectModule,
  MatStepperModule,
  MatCheckboxModule,
  MatDividerModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatBadgeModule,
  MatSlideToggleModule,
  MatCardModule,
  MatPaginatorModule
} from '@angular/material';

//Components
import { FooterComponent } from './components/app/footer/footer.component';
import { HeaderComponent } from './components/app/header/header.component';
import { SideNavComponent } from './components/app/side-nav/side-nav.component';
import { AlertComponent } from './components/app/alert/alert.component';

//Pages
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RecoverAccountComponent } from './pages/recover-account/recover-account.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

//Services
import { AuthService } from './services/auth/auth.service';

//Interceptors
import { AuthInterceptorService } from './interceptors/auth/auth-interceptor.service';

//Guards
import { AuthGuard } from './guards/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AlertComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    LoginComponent,
    PageNotFoundComponent,
    ContactComponent,
    RecoverAccountComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatCardModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  entryComponents: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
