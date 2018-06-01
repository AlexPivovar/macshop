import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[];
  availableColors: string[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  inStock(product: Product): boolean {
    return product.productDescription.quantity > 0;
  }

  initColorMap(product: Product): string[] {
    this.availableColors = product.productDescription.color.split(";");
    this.availableColors.splice(length - 1, 1);

    return this.availableColors;
  }

}
