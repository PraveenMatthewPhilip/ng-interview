import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/productservice.service';

@Component({
  selector: 'app-top-product-list',
  templateUrl: './top-product-list.component.html',
  styleUrls: ['./top-product-list.component.scss'],
})
export class TopProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductsSmall().subscribe(
      (product) =>
        (this.products = product.map((item) => ({
          ...item,
          inventoryStatus: ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'][
            Math.floor(Math.random() * 3)
          ],
          rating: Math.floor(Math.random() * 6),
        })))
    );
    console.log(this.products);
  }
}
