import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductAllCompoComponent } from './product-all-compo/product-all-compo.component';
import { ProductAdditionalComponent } from './product-additional/product-additional.component';
import { CartComponent } from './cart/cart.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { OrdersPlacedComponent } from './orders-placed/orders-placed.component';
//import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search/:searchKey', component:  ProductAllCompoComponent},
  { path: 'productid/:id', component:  ProductAdditionalComponent},
  { path: 'cart/:id', component:  CartComponent},
  { path: 'cart', component:  CartComponent},
  {path:'register',component:RegisterFormComponent},
  { path: 'orders', component:  OrdersPlacedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
