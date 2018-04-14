import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./components/product/product.component";
import {NgModule} from "@angular/core";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";

const routes: Routes = [
  {
    path: 'catalog',
    component: ProductComponent
  },
  {
    path: 'product-add',
    component: ProductEditComponent
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
