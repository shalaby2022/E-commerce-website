import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthinicateGuard implements CanActivate {

  constructor(private _login:ProductService, private _router:Router)
  {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
      if(this._login.isLoggedin())
      {
        return true
      }
      else
      {
        this._router.navigate(['auth/login'])
        return false
      }
  }
  
}
