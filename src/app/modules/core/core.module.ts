import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { HeadingComponent } from './components/heading/heading.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HeadingComponent,
    SubTitleComponent,
    ProductComponent,
    ProductsContainerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
  ]
})
export class CoreModule { }
