import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  products:Product[]=[];
  constructor(private route:ActivatedRoute,private ProductService:ProductService) { 
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      // console.log(param)
      this.id=parseInt( param['id']);
    })
    this.products=this.ProductService.productsDetail;
    this.card= this.products.filter((item)=>{
      return item.id===this.id;
    })
    // console.log(this.card)
  }

}
