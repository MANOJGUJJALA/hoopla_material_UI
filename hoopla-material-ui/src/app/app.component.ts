import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { User } from './login/user';
import { RegisterService } from './login/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hoopla';
  loggedUser: User;
  hide = true;
  show = false;
  display = true;
  check:string="";
  name;
  searchKey:string = '';

  constructor(private router: Router, private registerService: RegisterService) {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() { 
    this.ngDoCheck();
    this.authenticateBySession();
    this.check=sessionStorage.getItem('uEmail');    
    // console.log("check value",this.check);
    
    // console.log(this.loggedUser);
    // this.ngDoCheck();
    // this.authenticateBySession();
    // this.check=sessionStorage.getItem('uEmail');
    // console.log(this.loggedUser);
  }
  logout() {
    sessionStorage.clear();
    this.loggedUser = null;
    this.display=false;
    this.hide=true;
    this.router.navigate(['/']);
  }
  

  ngDoCheck(): void {
    this.loggedUser = new User();
    this.loggedUser.uCredentials.uEmail = sessionStorage.getItem('uEmail');
    this.loggedUser.uCart = JSON.parse(sessionStorage.getItem('uCart'));
  }

  hideContent() {
    this.hide = false;
    this.show = true;
    this.display=true;
  }

  showContent() {
    this.hide = true;
    this.show = false;
    this.display=false;
    sessionStorage.setItem('uEmail',null)
  }
  searchProdts(searchKey:string) {
    // this.slideShow = false;
    // this.productShow = true;
    // this.categorySelected = null;
    // this.prodToBeSearched = searchKey;
    // console.log("typed",searchKey);
    this.router.navigate(['/search', searchKey]);
    this.searchKey = '';
  }
  
  searchProductsUpndDown(event, searchKey): void {
    if (event.key === 'Enter') {
      this.searchProdts(searchKey);
    }
  }
  authenticateBySession() {
    const loggedEmail = sessionStorage.getItem('uEmail');
    
    if (loggedEmail) {
      this.registerService.getUserDetail(loggedEmail).subscribe(
        res => {
          this.loggedUser = res;
        },
        err => { this.loggedUser = null; }
      );

    } else {
      this.loggedUser = null;
    }


  }
 
}
