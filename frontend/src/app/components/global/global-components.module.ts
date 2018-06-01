import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './error/error.component';
import {SigninComponent} from './signin/signin.component';
import {FormsModule} from "@angular/forms";
import {SignupComponent} from './signup/signup.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    SigninComponent,
    SignupComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    SigninComponent,
  ]
})
export class GlobalComponentsModule {
}
