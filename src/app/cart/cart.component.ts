import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  counter: number =0;
  price: number =0;
  cartItems: any[] =[];

  constructor(private _ProductService:ProductService) { 
    this._ProductService.getCart().subscribe(data => {
      this.cartItems = data
    })

    this._ProductService.getPrice().subscribe( priceData =>{
      this.price = priceData;
    })
  }


  ngOnInit(): void {
    this._ProductService.getNewCount().subscribe(count=> {
      this.counter = count });
  }

  addAmmount(data:any)
  {
    this._ProductService.incrementItem(data)
    this._ProductService.setNewCount(this.counter+ 1)
    this._ProductService.updatePrice()
  }

  subAmmount(data:any)
  {
    if(data.quantity > 1) {
    this._ProductService.decrementItem(data)
    this._ProductService.setNewCount(this.counter-1)
    this._ProductService.updatePrice()
    }
    else  {
      this.deleteItem(data)
      this._ProductService.updatePrice()
    }
  }

  deleteItem(item:any)
  { 
    this._ProductService.clearItems(item)
    this._ProductService.setNewCount(this.counter - item.quantity)
  }
}
