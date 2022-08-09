import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeWish } from '../counter/counter.actions';
import { wishesReducer } from '../counter/counter.reducer';
import { LoaderService } from '../loader/loader.service';
import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  wishItems:any[]=[]
  products:any[]=[];
  carts:any
  destroy: any;

  constructor(private _ProductService:ProductService,
    private _store: Store<{wishList : []}>,
    public _loader:LoaderService) { 
      
    this.destroy = this._ProductService.getProducts().subscribe((data)=> {
      this.products = data
    })
    this._ProductService.getCart().subscribe(data=> {
      this.carts = data
    })

    this._store.select("wishList").subscribe(res=>{
      this.wishItems = res
      console.log(this.wishItems);
    })
  }

  ngOnInit(): void {
    
  }

  removeFromWish(index:number)
  {
    this._store.dispatch(removeWish({ index }))
  }
  
  ngonDestroy():void {
    this.destroy.unsubscribe()
  }

}
