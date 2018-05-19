import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {ProductComponent} from './components/product/product.component';
import {ProductService} from './service/product.service';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {CatalogComponent} from './components/catalog/catalog.component';


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
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
