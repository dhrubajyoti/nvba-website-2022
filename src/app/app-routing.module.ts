import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/aboutus/team/team.component';
import { ConstitutionComponent } from './pages/aboutus/constitution/constitution.component';
import { HistoryComponent } from './pages/aboutus/history/history.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { DurgapujaComponent } from './pages/durgapuja/durgapuja.component';
import { GalleryComponent } from './pages/gallery/gallery/gallery.component';
import { PastteamsComponent } from './pages/archive/pastteams/pastteams.component';
import { MagazinesComponent } from './pages/archive/magazines/magazines.component';




const routes: Routes = [
  { path: "", component: DurgapujaComponent, pathMatch: 'full' }, 
  { path: "home", component: HomeComponent, pathMatch: 'full'  },
  { path: "team", component: TeamComponent, pathMatch: 'full'  },
  { path: "history", component: HistoryComponent, pathMatch: 'full'  },
  { path: "constitution", component: ConstitutionComponent, pathMatch: 'full'  },
  { path: "contactus", component: ContactusComponent, pathMatch: 'full'  },
  { path: "durgapuja", component: DurgapujaComponent, pathMatch: 'full'  },
  { path: "gallery", component: GalleryComponent, pathMatch: 'full'  },
  { path: "magazines", component: MagazinesComponent, pathMatch: 'full'  },


  { path: 'sign-in', component: SignInComponent },
  { path: 'login-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] }, 
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
