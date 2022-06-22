import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CurrencyPipe } from './currency.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NavbarComponent,
    CardComponent,
    ProductListComponent,
    ProductdetailsComponent,
    CurrencyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
