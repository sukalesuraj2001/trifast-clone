import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { InvestorsComponent } from './components/investors/investors.component';

import { ProductsComponent } from './components/products/products.component';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';

import { ServicesComponent } from './components/services/services.component';
import { IndustriesComponent } from './components/industries/industries.component';

import { SustainabilityComponent } from './components/sustainability/sustainability.component';

import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchedComponent } from './components/searched/searched.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"company",component:CompanyComponent},
  {path:"investor",component:InvestorsComponent},

  {path:"products",component:ProductsComponent},
  {path:"knowledge-base",component:KnowledgeBaseComponent},

  {path:"service",component:ServicesComponent},
  {path:"industries",component:IndustriesComponent},

  {path:"sustainability",component:SustainabilityComponent},

  {path:"contact",component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {
    path:"search",component:SearchedComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
