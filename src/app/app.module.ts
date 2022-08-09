import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule, HTTP_INTERCEPTORS } from'@angular/common/http'

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CurrencyPipe } from './currency.pipe';
import { CartComponent } from './cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { wishesReducer } from './counter/counter.reducer';
import { InterceptorService } from './loader/interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NavbarComponent,
    CardComponent,
    ProductListComponent,
    ProductdetailsComponent,
    CurrencyPipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({wishList : wishesReducer})
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
