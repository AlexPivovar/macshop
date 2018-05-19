import {ProductDescription} from "./product-description";

export class Product {
  id: number;
  name: string;
  cost: number;
  productDescription: ProductDescription;

  constructor() {
    this.name = "";
    this.cost = 0;
    this.productDescription = new ProductDescription();
    this.productDescription.year = 0;
    this.productDescription.description = "";
    this.productDescription.color = "";
  }
}
