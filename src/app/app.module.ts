import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { CompanyComponent } from './components/company/company.component';
import { InvestorsComponent } from './components/investors/investors.component';

import { ProductsComponent } from './components/products/products.component';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';

import { ServicesComponent } from './components/services/services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { MaterialModule } from './material/material.module';

import { SustainabilityComponent } from './components/sustainability/sustainability.component';

import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CardsComponent,
    CompanyComponent,
    InvestorsComponent,

    ProductsComponent,
    KnowledgeBaseComponent,
    RegisterComponent,
    ServicesComponent,
    IndustriesComponent,

    SustainabilityComponent,

    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
