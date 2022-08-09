import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  WishItems = new BehaviorSubject<any[]>([]);
  wishes:any[] = [];

  LoginData = new BehaviorSubject(null);

  count:number =0
  cardCount = new BehaviorSubject(0)

  cartItems = new BehaviorSubject<any[]>([]);
  carts:any[]=[]

  totalPrice = new BehaviorSubject(0)
  prices: number =0

  constructor(private _httpClient:HttpClient, private _router:Router) { 
    
  }


  //----------------------------------------- Api ----------------------------------------//
  getProducts():Observable<any> 
  {
    return this._httpClient.get('https://api.escuelajs.co/api/v1/products')
  }

  getProdDetail(id:number):Observable<any>
  {
    return this._httpClient.get(`https://api.escuelajs.co/api/v1/products/${id}`)
  }

  //----------------------------------------- counter ----------------------------------------//

  setNewCount(Count:number) 
  {
    this.cardCount.next(Count)
  }

  getNewCount()
  {
    return this.cardCount.asObservable()
  }

  //----------------------------------------- addTocart ----------------------------------------//

  addCart(product:any) 
  {
    let cart = this.carts.find((item:any) => {
      return item.id == product.id
    });
    if(cart) 
    {
      cart.quantity = cart.quantity + 1;
    }
    else {
      this.carts.push({
        id:product.id,
        quantity:1,
        title: product.title,
        price: product.price,
        image: product.images[0]
      })
    }
    this.cartItems.next(this.carts)
    this.updatePrice()
  }

  getCart()
  {
    return this.cartItems.asObservable()
  }

  incrementItem(product: any)
  {
    product.quantity++;
    this.updatePrice()
  }

  decrementItem(product:any) 
  {
    product.quantity--;
    this.updatePrice()
  }

  clearItems(product:any)
  {
    let index = this.carts.indexOf(product);
    console.log(this.carts[index].quantity);
    this.carts.splice(index,1)
    this.updatePrice()
    return this.carts
  }

  updatePrice() {
    this.prices=0
    this.carts.map((cart)=> {
        this.prices += cart.price * cart.quantity
    })
    this.totalPrice.next(this.prices)
  }
  
  getPrice()
  {
    return this.totalPrice.asObservable()
  }

  
  //----------------------------------------- LoginData ----------------------------------------//

  isLoggedin()
  {
    return !!localStorage.getItem('Email');
  }

  ngOnInit(): void {
    
  }

}
