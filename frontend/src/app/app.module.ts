import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {ProductComponent} from './components/product/product.component';
import {ProductService} from "./service/product.service";
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {GlobalComponentsModule} from "./components/global/global-components.module";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GlobalComponentsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
