import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'catalog', component: ProductComponent},
  {path: 'add', component: AddProductComponent}
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
export class AppRoutingModule{}
