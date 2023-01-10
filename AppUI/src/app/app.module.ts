import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module/material.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CurrentAccountComponent } from './components/products/current-account/current-account.component';
import { PersonalLoanComponent } from './components/products/personal-loan/personal-loan.component';
import { HomeLoanComponent } from './components/products/home-loan/home-loan.component';
import { CarLoanComponent } from './components/products/car-loan/car-loan.component';
import { BusinessLoanComponent } from './components/products/business-loan/business-loan.component';
import { DebitCardsComponent } from './components/products/debit-cards/debit-cards.component';
import { CreditCardsComponent } from './components/products/credit-cards/credit-cards.component';
import { CareerComponent } from './components/career/career.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { FAQPageComponent } from './components/faq-page/faq-page.component';
import { ProgressSpinnerDialogComponent } from './components/progress-spinner-dialog/progress-spinner-dialog.component';
import { SavingsAccountComponent } from './components/products/savings-account/savings-account.component';
import { OpenAccountComponent } from './components/products/open-account/open-account.component';
import { NameTitlePipe } from './services/name-title.pipe';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TransactionsComponent } from './components/user/transactions/transactions.component';
import { LoanApplicationsComponent } from './components/user/loan-applications/loan-applications.component';

@NgModule({
  declarations: [    
    AppComponent,
    HomeComponent,
    BannerComponent,
    MenuBarComponent,
    ContactUsComponent,
    CurrentAccountComponent,
    PersonalLoanComponent,
    HomeLoanComponent,
    CarLoanComponent,
    BusinessLoanComponent,
    DebitCardsComponent,
    CreditCardsComponent,
    CareerComponent,
    PageNotFoundComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    FAQPageComponent,
    ProgressSpinnerDialogComponent,
    SavingsAccountComponent,
    OpenAccountComponent,
    NameTitlePipe,
    AboutUsComponent,
    TransactionsComponent,
    LoanApplicationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
