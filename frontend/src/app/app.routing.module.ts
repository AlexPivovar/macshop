import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./components/product/product.component";
import {NgModule} from "@angular/core";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {GlobalComponentsModule} from './components/global/global-components.module';
import {CatalogComponent} from './components/catalog/catalog.component';
import {SigninComponent} from "./components/global/signin/signin.component";
import {AdminAuthGuard} from "./components/guards/admin-auth-guard.service";
import {ErrorComponent} from "./components/global/error/error.component";
import {GuestGuard} from "./components/guards/guest-guard.service";
import {SignupComponent} from "./components/global/signup/signup.component";

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'product-list',
    component: ProductComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'product-add',
    component: ProductEditComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    canActivate: [AdminAuthGuard]
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
