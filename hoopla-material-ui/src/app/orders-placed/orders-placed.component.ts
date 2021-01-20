// import { Component,  } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import {AfterViewInit, Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-orders-placed',
  templateUrl: './orders-placed.component.html',
  styleUrls: ['./orders-placed.component.css']
})
export class OrdersPlacedComponent implements OnInit,AfterViewInit  {

  public tableData
  dataSource
  displayedColumns: string[] = ['_id', 'quantity', 'createdAt', 'Total_Cost'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    
  }
  
  
  constructor(private CartServiceServic:CartServiceService,private router:Router) { }
  
  
  ngOnInit(): void {
    this.CartServiceServic.getOrders().subscribe((success)=>{
      this.tableData=success
      // console.log("data in table",success);
      success.sort((a:any,b:any)=>{
        if(a.OderDateSort>b.OderDateSort)
        {
          return -1
        }
       else if(a.OderDateSort<b.OderDateSort)
        {
          return 1
        }
        else{
          return 0
        }

      })
      // success=success.map((obj)=> 
      // console.log(
      //  obj.OderDate.toDateString())
      //  )
      ELEMENT_DATA=success
      // console.log(ELEMENT_DATA,"[][][][]");
      
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }

  showDescription(id)
  {
    // console.log("id is",id);
    this.router.navigate(["/productid",id])
  }

}

let ELEMENT_DATA: PeriodicElement[]=[{    "_id": "1022","quantity": 5900, "createdAt": "Purple Red",  "availability": 589 }]//=const [tableData]
export interface PeriodicElement {
  _id: string;
  quantity: number;
  createdAt: string;
  availability: number;
}