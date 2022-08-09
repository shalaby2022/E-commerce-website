import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../loader/loader.service';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  id:any;
  card:any
  counter:number=0
  destroy: any;

  constructor(private route:ActivatedRoute,
    private _ProductService:ProductService,
    public _loader:LoaderService
    ) {
    this.route.params.subscribe(param=>{
      this.id=parseInt( param['id']);
    }) 
  this.destroy = _ProductService.getProdDetail(this.id).subscribe((data)=> {
      this.card = data
      console.log(data);
  })
}

  ngOnInit(): void {
  
  }

  addcart(product:any) 
  {
    this._ProductService.getNewCount().subscribe(res => {
      this.counter = res })
      this._ProductService.setNewCount(++this.counter)
      this._ProductService.addCart(product)
  }

  ngOnDestroy():void {
    this.destroy.unsubscribe()
  }
}
