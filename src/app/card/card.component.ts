import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addWish, removeWish, removeWishID } from '../counter/counter.actions';
import { Product } from '../product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('product')product:any

  status:boolean =false
  isWished:boolean = false;
  cartItems: any[] =[];
  counter:number = 0;
  price: number =0;
  destroy: any

  constructor(private _ProductService:ProductService, private _store: Store<{wishList : []}>) { 
    this.destroy = this._ProductService.getPrice().subscribe( priceData =>{
      this.price = priceData;
    })
    
  }

  addcart(data:any) 
  {
    this._ProductService.getNewCount().subscribe(res => {
      this.counter = res 
    })
      this._ProductService.setNewCount(++this.counter);

      this._ProductService.getCart().subscribe(data => {
        this.cartItems = data
      })

      this._ProductService.addCart(data)

      this._ProductService.getPrice().subscribe(res=>{
        // console.log(res);
    })
  }

  ngOnInit(): void {
  }
  
  addToWish(element: any, image: string, title: string, id: number)
  {
    element.classList.toggle('wish')
    if(this.status) {
      this._store.dispatch(removeWishID({id}))
      this.status =false;
    }
    else {
      this._store.dispatch(addWish( {image: image, title: title, id: id}));
      this.status = true
    }

    console.log("hello");
  }

  ngOnDestroy():void {
    this.destroy.unsubscribe()
  }
}
