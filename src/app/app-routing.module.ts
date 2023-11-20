import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { InvestorsComponent } from './components/investors/investors.component';
import { ServicesComponent } from './components/services/services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"company",component:CompanyComponent},
  {path:"investor",component:InvestorsComponent},
  {path:"service",component:ServicesComponent},
  {path:"industries",component:IndustriesComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
