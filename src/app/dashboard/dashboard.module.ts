import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { CommonPartsModule } from '../common/commonparts.module';
import { TopProductListComponent } from './top-product-list/top-product-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardMainComponent, TopProductListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonPartsModule,
    ButtonModule,
    TableModule,
    RatingModule,
    FormsModule,
  ],
})
export class DashboardModule {}
