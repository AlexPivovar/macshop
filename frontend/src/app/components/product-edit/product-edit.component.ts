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
  allColors: string[] = ["black", "white", "blue", "green"];

  /*  allColors: string[] = ["черный", "белый", "синий", "зеленый", "розовый", "желтый", "космический серый", "золотой",
    "серебристый", "розовое золото", "глянцево-чёрный", "красный"];*/

  availableColors: string[];
  chosenColors: Map<string, boolean> = new Map<string, boolean>();

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
            this.initColorMap();
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

  initColorMap(): void {
    this.availableColors = this.product.productDescription.color.split(";");

    for (let color of this.allColors) {
      for (let availableColor of this.availableColors) {
        if (color === availableColor) {
          this.chosenColors.set(color, true);

          break;
        } else {
          this.chosenColors.set(color, false);
        }
      }
    }
  }

  isAvailable(currentColor: string): boolean {
    return this.chosenColors.get(currentColor);
  }

  refreshColorModel(): void {
    this.product.productDescription.color = "";

    for (let color of this.allColors) {
      if (this.chosenColors.get(color)) {
        this.product.productDescription.color += (color + ";");
      }
    }
  }

  setColorAvailability(currentColor: string) {
    this.chosenColors.set(currentColor, !this.chosenColors.get(currentColor));
    this.refreshColorModel();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
