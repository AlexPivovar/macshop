import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../models/product';

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
        this.productService.get(id).subscribe((product: Product) => {
          if (product) {
            this.product = product;
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/product-list']);
  }

  createProduct(): void {
    this.productService.create(this.product)
      .subscribe(() => {
        console.log('Created product and description');
      });

    alert('Created!!!');

    this.gotoList();
  }

  updateProduct(id: string, product: any): void {
    this.productService.update(id, product)
      .subscribe(() => {
        console.log('Update product');
      });

    alert('Updated!!!');
    this.gotoList();
  }

  removeProduct(id: string): void {
    this.productService.remove(id).subscribe(() => {
    }, error => console.error(error));

    this.productService.getAll();

    alert('Deleted!!!');
    this.gotoList();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
