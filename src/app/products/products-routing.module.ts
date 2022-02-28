import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsMainComponent } from './products-main/products-main.component';

const routes: Routes = [{ path: 'products', component: ProductsMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
