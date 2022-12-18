import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './components/career/career.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FAQPageComponent } from './components/faq-page/faq-page.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BusinessLoanComponent } from './components/products/business-loan/business-loan.component';
import { CarLoanComponent } from './components/products/car-loan/car-loan.component';
import { CreditCardsComponent } from './components/products/credit-cards/credit-cards.component';
import { CurrentAccountComponent } from './components/products/current-account/current-account.component';
import { DebitCardsComponent } from './components/products/debit-cards/debit-cards.component';
import { HomeLoanComponent } from './components/products/home-loan/home-loan.component';
import { PersonalLoanComponent } from './components/products/personal-loan/personal-loan.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'current-account', component: CurrentAccountComponent },
  { path: 'car-loan', component: CarLoanComponent },
  { path: 'busigness-loan', component: BusinessLoanComponent },
  { path: 'personal-loan', component: PersonalLoanComponent },
  { path: 'home-loan', component: HomeLoanComponent },
  { path: 'debit-cards', component: DebitCardsComponent },
  { path: 'credit-cards', component: CreditCardsComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  /*
  { path: 'dashboard', component: DashboardComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'Admin'
  } },
  { path: 'profile', component: ProfileComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'User'
  } },
  */
  { path: 'registration', component: RegistrationComponent },
  { path: 'faq-page', component: FAQPageComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
