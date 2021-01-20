import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsAllService } from '../products-all.service';
@Component({
  selector: 'app-product-all-compo',
  templateUrl: './product-all-compo.component.html',
  styleUrls: ['./product-all-compo.component.css']
})
export class ProductAllCompoComponent implements OnInit {

  constructor( private router: Router,
    private activatedroute: ActivatedRoute,private ProductsAllServic:ProductsAllService) { }

  @Input() productArry
  productArr=[]
  searchKey=''
  show=false
  ngOnInit(): void {
    this.productArr=this.productArry
    // console.log(this.productArr+"---------");
    
    this.activatedroute.params.subscribe((success)=>{
       
       this.searchKey=success['searchKey']
    })
    // console.log("searched from param",this.productArry);
    // if(this.productArr.length>0)
    // {
    //   this.show=false
    // }
    // else{
    //   this.show=true
    // }
    this.searchedItems()
    
  }
  showProductid(id)
  {  
    // console.log("id is",id);
    this.router.navigate(["/productid",id])
    
  }
  searchedItems()
  {
    if(this.searchKey!=null)
    {
        this.ProductsAllServic.searchedItems(this.searchKey).subscribe((success)=>{
          this.productArry=success
          // console.log(success);
          
          if(this.productArry.length>0)
          {
            // console.log("success",this.productArry);
            this.show=false

          }
          else{
            this.show=true
          }
        })
    }

  }
}
