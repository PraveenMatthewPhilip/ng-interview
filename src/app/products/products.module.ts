import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsMainComponent } from './products-main/products-main.component';

@NgModule({
  declarations: [ProductsMainComponent],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [ProductsMainComponent],
})
export class ProductsModule {}
