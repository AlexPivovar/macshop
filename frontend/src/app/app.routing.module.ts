import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./components/product/product.component";
import {NgModule} from "@angular/core";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {GlobalComponentsModule} from './components/global/global-components.module';

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
    RouterModule.forRoot(routes),
    GlobalComponentsModule
  ],
  exports: [
    RouterModule,
    GlobalComponentsModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
