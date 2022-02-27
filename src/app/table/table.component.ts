import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../productservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProductsSmall()
      .then(
        (cars) =>
          (this.products = cars.map((item) => ({
            ...item,
            inventoryStatus: 'INSTOCK',
          })))
      );
  }
}
