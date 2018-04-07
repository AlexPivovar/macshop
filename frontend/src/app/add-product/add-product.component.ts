import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {Router} from "@angular/router";
import {ProductService} from "../product/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
  }

  createProduct(): void {
    this.productService.createProduct(this.product)
      .subscribe(data => {
        alert("Product create successfully.")
      })
  }
}
