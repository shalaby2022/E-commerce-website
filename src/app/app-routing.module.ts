import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductListComponent},
  {path:'details/:id',component:ProductdetailsComponent},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
