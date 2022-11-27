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
    LoginComponent
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
