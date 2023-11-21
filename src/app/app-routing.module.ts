import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { InvestorsComponent } from './components/investors/investors.component';
import { ProductsComponent } from './components/products/products.component';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"company",component:CompanyComponent},
  {path:"investor",component:InvestorsComponent},
  {path:"products",component:ProductsComponent},
  {path:"knowledge-base",component:KnowledgeBaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
