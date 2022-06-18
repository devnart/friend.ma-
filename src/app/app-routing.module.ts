import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';
import { HomeComponent } from './modules/core/pages/home/home.component';
import { ListComponent } from './modules/core/pages/list/list.component';
import { CityComponent } from './modules/core/pages/city/city.component';
import { ShowOfferComponent } from './modules/offer/pages/show-offer/show-offer.component';
import { NotFoundComponent } from './modules/core/pages/not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'all', component: ListComponent, pathMatch: 'full'  },
      { path: 'city/:city', component: CityComponent, pathMatch: 'full'  },
      { path: 'offer/:id', component: ShowOfferComponent, pathMatch: 'full'  },
      // 404
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '/404' },
    ]
  },
  {
    path: 'login',
    component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
