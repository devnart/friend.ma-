import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';
import { HomeComponent } from './modules/core/pages/home/home.component';
import { ListComponent } from './modules/core/pages/list/list.component';
import { CityComponent } from './modules/core/pages/city/city.component';
import { ShowOfferComponent } from './modules/offer/pages/show-offer/show-offer.component';
import { NotFoundComponent } from './modules/core/pages/not-found/not-found.component';
import { ShowDemandComponent } from './modules/demand/pages/show-demand/show-demand.component';
import { AddProductComponent } from './modules/core/pages/add-product/add-product.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'all', component: ListComponent },
      { path: 'city/:city', component: CityComponent },
      { path: 'offer/:id', component: ShowOfferComponent},
      { path: 'demand/:id', component: ShowDemandComponent },
      { path: 'add', component: AddProductComponent, canActivate: [AuthGuard] },
      { path: '404', component: NotFoundComponent },
    ]
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
