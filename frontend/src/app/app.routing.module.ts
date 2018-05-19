import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./components/product/product.component";
import {NgModule} from "@angular/core";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {GlobalComponentsModule} from './components/global/global-components.module';
import {CatalogComponent} from './components/catalog/catalog.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductComponent
  },
  {
    path: 'product-add',
    component: ProductEditComponent
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
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
