import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { CardsComponent } from './cards/cards.component';
import { CompanyComponent } from './components/company/company.component';
import { InvestorsComponent } from './components/investors/investors.component';
import { ProductsComponent } from './components/products/products.component';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';


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
    KnowledgeBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
