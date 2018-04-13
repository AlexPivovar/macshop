import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product/product.service';
import {NgForm} from '@angular/forms';
import {Product} from '../product/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  product: Product = new Product();

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.productService.get(id).subscribe((product: any) => {
          if (product) {
            this.product = product;
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/catalog']);
  }

  createProduct(): void {
    this.productService.create(this.product)
      .subscribe(() => {
        alert('Created!!!');
        this.gotoList();
      });
  }

  updateProduct(id: string, product: any): void {
    this.productService.update(id, product)
      .subscribe(() => {
        alert('Updated!!!');
        this.gotoList();
      });
  }

  removeProduct(id: string): void {
    this.productService.remove(id).subscribe(() => {
      alert('Deleted!!!');
      this.gotoList();
    }, error => console.error(error));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
