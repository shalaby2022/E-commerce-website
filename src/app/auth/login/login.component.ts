import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  err: string =''
  constructor(private _productService:ProductService, private _router:Router) { }

  ngOnInit(): void {
  }

  sendInfo(data:any) {
    if(data.valid)
    {
      console.log(data);
      localStorage.setItem('Email',JSON.stringify(data.controls.Email.value))
      this._router.navigate([''])
    }
    else{
      // this._router.navigate(['/auth/register'])
      this.err ='Please Enter Your Email and Passowrd'
    }
  }
}
