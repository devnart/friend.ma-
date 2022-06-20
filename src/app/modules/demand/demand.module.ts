import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDemandComponent } from './pages/show-demand/show-demand.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ShowDemandComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class DemandModule { }
