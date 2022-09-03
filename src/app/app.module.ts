import { NgModule } from '@angular/core';

import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { TeamComponent } from './pages/aboutus/team/team.component';

import { GetjsonfileService } from './services/getjsonfile.service';
import { ConstitutionComponent } from './pages/aboutus/constitution/constitution.component';
import { ThreecolComponent } from './helper/home/threecol/threecol.component';
import { DonationsComponent } from './helper/home/donations/donations.component';

import { LatesteventsComponent } from './helper/home/latestevents/latestevents.component';
import { VolunteerComponent } from './helper/home/volunteer/volunteer.component';
import { SponsersComponent } from './helper/home/sponsers/sponsers.component';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from "./shared/services/auth.service";
import { ProfileComponent } from './helper/dashboard/profile/profile.component';
import { CartmemberComponent } from './helper/dashboard/cartmember/cartmember.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout/checkout.component';

// import { ToastrModule } from 'ngx-toastr';
import { NgxPayPalModule } from 'ngx-paypal';
import { CartticketsComponent } from './helper/dashboard/carttickets/carttickets.component';
import { DurgapujaComponent } from './pages/durgapuja/durgapuja.component';
import { HistoryComponent } from './pages/aboutus/history/history.component';
import { GalleryComponent } from './pages/gallery/gallery/gallery.component';
import { PastteamsComponent } from './pages/archive/pastteams/pastteams.component';
import { MagazinesComponent } from './pages/archive/magazines/magazines.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    TeamComponent,
    ConstitutionComponent,
    ThreecolComponent,
    DonationsComponent,
    LatesteventsComponent,
    VolunteerComponent,
    SponsersComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    CartmemberComponent,
    CheckoutComponent,
    ProfileComponent,
    CartticketsComponent,
    DurgapujaComponent,
    HistoryComponent,
    GalleryComponent,
    PastteamsComponent,
    MagazinesComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    //fire
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
 //   ToastrModule.forRoot(),
    NgxPayPalModule,
  ],
  providers: [GetjsonfileService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
