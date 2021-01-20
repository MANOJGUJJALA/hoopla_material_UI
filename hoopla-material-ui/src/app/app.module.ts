import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UriService } from './uri.service';
import { GuardService } from './guard.service';
import { RegisterService } from './login/register.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ---------------angular-material--------------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCarousel, MatCarouselComponent, MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgMatSearchBarModule } from 'ng-mat-search-bar';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductsAllService } from './products-all.service';
import {MatBadgeModule} from "@angular/material/badge";
import { ProductAllCompoComponent } from './product-all-compo/product-all-compo.component'
import {MatGridListModule} from  '@angular/material/grid-list';
import { ProductAdditionalComponent } from './product-additional/product-additional.component';
import { CartComponent } from './cart/cart.component';
import { OrdersPlacedComponent } from './orders-placed/orders-placed.component';
import { RegisterFormComponent } from './register-form/register-form.component';
// import { RefisterFormComponent } from './refister-form/refister-form.component'

// import { OrdersPlacedComponent } from './orders-placed/orders-placed.component'
import {MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProductAllCompoComponent,
    ProductAdditionalComponent,
    CartComponent,
    OrdersPlacedComponent,
    RegisterFormComponent,
    // RefisterFormComponent
  ],
  imports: [
    BrowserModule, MatTabsModule, MatSidenavModule, MatToolbarModule, ReactiveFormsModule, NgMatSearchBarModule,MatSnackBarModule,
    AppRoutingModule, MatCardModule, MatInputModule, FormsModule, HttpClientModule, MatIconModule,MatTableModule,MatPaginatorModule,
    BrowserAnimationsModule, MatButtonModule, MatFormFieldModule, MatCarouselModule,MatBadgeModule,MatCardModule,MatGridListModule
  ],
  providers: [UriService, RegisterService, GuardService,ProductsAllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
