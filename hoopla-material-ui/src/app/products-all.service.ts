import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UriService } from './uri.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsAllService {

  urlService
  constructor(private http:HttpClient,private UriServic:UriService) { 
    this.urlService=this.UriServic.buildHooplaWebServiceUri()
  }

  url="/getAllCategeoryProducts/"
  urlSearchedItems="/searchedItems/"
  urlshowProductid="/showProductid/"


  dashboardData(data): Observable<any> {

    return this.http.get<any>(this.urlService+this.url+data)
  }
  searchedItems(searcheditem): Observable<any>
  {
    // console.log("in ser",searcheditem);
    
    return this.http.get<any>(this.urlService+this.urlSearchedItems+searcheditem)
  }
  showProductid(id): Observable<any>
  {
    // console.log("in ser",id);
    return this.http.get<any>(this.urlService+this.urlshowProductid+id)
  }
}  
