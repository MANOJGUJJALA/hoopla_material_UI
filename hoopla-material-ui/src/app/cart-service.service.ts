import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UriService } from './uri.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  urlService
  constructor(private http:HttpClient,private UriServic:UriService) { 
    // buildHooplacartServiceUri
    this.urlService=this.UriServic.buildHooplacartServiceUri()
  }
  url="/updateCart"
  ur="/getOrders"
  addToCartt="/addToCart"
  getCartDataa="/getCartData"
  deleteProductinCartt="/deleteProductinCart"

  updateCart(newOne): Observable<any>
  {
    // console.log("in ser",newOne);
    // console.log("pathis ",this.urlService+this.url);
    
    return this.http.post<any>(this.urlService+this.url,newOne)
  }
  getOrders():Observable<any>
  {
    return this.http.get<any>(this.urlService+this.ur)
  }

  
  addToCart(newOne): Observable<any>
  {
    // console.log("in ser",newOne);
    // console.log("pathis ",this.urlService+this.addToCartt);
    
    return this.http.post<any>(this.urlService+this.addToCartt,newOne)
  }
  getCartData():Observable<any>
  {
    return this.http.get<any>(this.urlService+this.getCartDataa)
  }

  deleteProductinCart(id): Observable<any>
  {
    let obj={id:id}
    // console.log("in ser to delete",obj);

    // console.log("pathis ",this.urlService+this.addToCartt);
    
    return this.http.post<any>(this.urlService+this.deleteProductinCartt,obj)
  }
}
