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
import { CityCardComponent } from './components/city-card/city-card.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './pages/list/list.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { SimpleDropDownComponent } from './components/simple-drop-down/simple-drop-down.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CityComponent } from './pages/city/city.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HeadingComponent,
    SubTitleComponent,
    ProductComponent,
    ProductsContainerComponent,
    CityCardComponent,
    CardComponent,
    ListComponent,
    DropDownComponent,
    SimpleDropDownComponent,
    PaginationComponent,
    CityComponent,
    ContactCardComponent,
    NotFoundComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    ContactCardComponent
  ]
})
export class CoreModule { }
