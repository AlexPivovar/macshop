import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {ProductComponent} from './components/product/product.component';
import {ProductService} from './service/product.service';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {AuthService} from "./service/auth.service";
import {TokenStorage} from "./core/token.storage";
import {Interceptor} from "./core/interceptor";

import {JwtHelperService} from '@auth0/angular-jwt';
import {AdminAuthGuard} from "./components/guards/admin-auth-guard.service";
import {GuestGuard} from "./components/guards/guest-guard.service";
import {SignUpService} from "./service/sign-up.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductEditComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService, AuthService, SignUpService, TokenStorage, JwtHelperService, AdminAuthGuard, GuestGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
