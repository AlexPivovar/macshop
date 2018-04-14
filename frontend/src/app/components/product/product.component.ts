import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data
    })
  }

  deleteProduct(id: string): void {
    this.productService.remove(id).subscribe(() => {
      alert('Deleted!!!');
      this.ngOnInit();
    }, error => console.error(error));
  }
}