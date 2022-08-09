import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navCounter:number=0
  constructor(private product:ProductService) { 
    this.product.getNewCount().subscribe(count =>{
      this.navCounter = count
    })
  }

  ngOnInit(): void {
    
  }

}
