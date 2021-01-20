import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsAllService } from '../products-all.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-additional',
  templateUrl: './product-additional.component.html',
  styleUrls: ['./product-additional.component.css']
})
export class ProductAdditionalComponent implements OnInit {

  constructor(private ActivatedRout:ActivatedRoute,private router:Router,private ProductsAllServic:ProductsAllService,private location: Location) { }
    id
    user
    cardData: any
    productDetails
  ngOnInit(): void {
    this.ActivatedRout.params.subscribe((success)=>{
      this.id=success['id']
      // console.log("id is",this.id);
      
    })
    this.showProductid(this.id)
  }
  showProductid(id)
  {
    this.ProductsAllServic.showProductid(id).subscribe((success)=>{
      this.cardData=success[0]
      // console.log("id data",this.cardData);
      
    })

  }
  goBack()
  {
    this.location.back()
  }

  AddToCart()
  {
    // console.log("calling cart",this.id);

    this.user=sessionStorage.getItem('uEmail'); 
    
    if(this.user!=null)
    {

      this.router.navigate(['/cart', this.id]);
    }
    else{
      alert("You have to Login First")
      this.router.navigate(['/login']);
    }
  }

}
