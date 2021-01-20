import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { ProductsAllService } from '../products-all.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {  

  constructor(private snackBar: MatSnackBar, private ProductsAllServic:ProductsAllService,private ActivatedRout:ActivatedRoute,private router:Router,private CartServiceServic:CartServiceService) { }
  cardData
  id
   cardArry=[]
  errorMessage
  quantity=1
  totalAmount
  price
  tax
  checkoutbtn=true
  succMsg=""
  errMsg=""
  deleSucMsg=""
  deleErrorMsg=""

  ngOnInit(): void {

    this.ActivatedRout.params.subscribe((success)=>{
      this.id=success['id']
      // console.log("id is",this.id);
      
    })

    if(this.id!=undefined)
    {

      this.ProductsAllServic.showProductid(this.id).subscribe((success)=>{
        this.cardData=success[0]
        this.cardArry.push(success[0])
        
        // console.log("id cart",this.cardData);


        this.CartServiceServic.addToCart( this.cardData).subscribe((success)=>{
            this.succMsg=success.message
            // console.log("killing----------",this.succMsg);
            this.snackBar.open(this.succMsg,'Ok',{duration:3000});
            
        },(err)=>{
          this.errMsg=err.message
          // console.log(this.errMsg);
          
        })
        
      })
    }
    else{
      this.CartServiceServic.getCartData().subscribe((success)=>{
        this.cardArry=success
        // console.log("cart arrya is",success);
      })
    }
  }
  productDescriptionLink(id)
  {
    this.router.navigate(["/productid",id])
  }
  deleteThis(id)
  {
    // console.log("id to delete",id);
    
    this.cardArry=this.cardArry.filter((data)=>{
      if(data._id!=id)
      {

        return true
      }
    })
    this.CartServiceServic.deleteProductinCart(id).subscribe((success)=>{
          this.deleSucMsg=success.message
          // console.log(this.deleSucMsg);
          this.snackBar.open(this.deleSucMsg,'Ok',{duration:3000});
          
    },(err)=>{
          this.deleErrorMsg=err.message
          // console.log(this.deleErrorMsg);
          this.snackBar.open(this.deleErrorMsg,'Ok',{duration:3000});
          
    })
  }

  Dynamic_Price()
  {
    // console.log("qauntity changing",this.quantity,this.cardArry);
    let s=0
    for (const iterator of this.cardArry) {
      s+=iterator.price*(this.quantity)
      
    }
    this.price=s
    this.tax=this.price*0.17
    this.totalAmount=this.price+this.tax
    this.checkoutbtn=false
    
  }

  order_placed()
  {
    let today=new Date()
    // console.log(today.toDateString());
    this.cardArry[0].quantity=this.quantity
    // console.log("clicking",this.cardArry[0]);
    // this.cardArry[0].createdAt=today.toDateString()
    this.cardArry[0].OderDate=today.toDateString()
    this.cardArry[0].TotalCost=this.totalAmount
    this.cardArry[0].OderDateSort=today
      this.CartServiceServic.updateCart(this.cardArry[0]).subscribe((success)=>{

        // console.log("response",success.message);
        this.snackBar.open(success.message,'Ok',{duration:3000});
        
      },(err)=>{
        // console.log(err.message);
        this.snackBar.open(err.message,'Ok',{duration:3000});
        
      })
      this.router.navigate(['/orders']);      
  }
}
