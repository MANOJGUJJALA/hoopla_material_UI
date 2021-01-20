import { Component, OnInit } from '@angular/core';
import { ProductsAllService } from '../products-all.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  prodToBeSearched: string;
  categorySelected: string;

  errorMessage: string;
  slideShow: boolean;
  productShow: boolean;
  cardData=[]
  imgUrl=[]
  constructor(private ProductsAllServic:ProductsAllService) { }
  categories = ['Electronics', 'Shoes', 'Clothing', 'Furniture'];
  ngOnInit() {
    this.slideShow = true;
    this.productShow = false;
    
    
  }

  viewProductByCategory(choosenCategory:string) {
    // console.log("calling",choosenCategory);
    this.slideShow = false;
    this.productShow = true;
    // this.prodToBeSearched=null;
    // this.categorySelected=choosenCategory;
    // alert('Products related to a particlar category should be shown.');
    this.ProductsAllServic.dashboardData(choosenCategory).subscribe((success)=>{
      // console.log("dtaa",success.data);
      this.cardData=success.data;
      // console.log(this.cardData+"123456776543");
      
      // console.log("dtaa",success);
      this.cardData=success.data
  },
  error => this.errorMessage = error
)
}
}
