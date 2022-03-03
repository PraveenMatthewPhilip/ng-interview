import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/productservice.service';

@Component({
  selector: 'app-top-product-list',
  templateUrl: './top-product-list.component.html',
  styleUrls: ['./top-product-list.component.scss'],
})
export class TopProductListComponent implements OnInit {
  limitProductToDisplay = 2;
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((product) => {
      this.products = product
        .map((item) => ({
          ...item,
          name: item.title,
          inventoryStatus: ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'][
            Math.floor(Math.random() * 3)
          ],
          rating: Math.floor(Math.random() * 6),
        }))
        .slice(0, this.limitProductToDisplay);
    });
  }
}
