import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../models/product";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
      })
  }

  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product)
      .subscribe(data => {
        this.products = this.products.filter(p => p !== product)
      })

  };

}
