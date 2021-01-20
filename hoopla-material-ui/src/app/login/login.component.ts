import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Credentials } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private registerService: RegisterService, 
    private router: Router) {
  
  }
  errorMessage: string;
  successMessage: string;
  loginForm: any;

  email = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+(@)(infosys|infy|gmail)(.)(com|co.in)$/)]);
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{7,21}$/)]);

  register() {
    this.router.navigate(['/register']);
  }

  
  getErrorMessage(field: string) {
    if (field === 'email') {
      return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('pattern') ? 'Not a valid email' :
          '';
    } else if (field === 'password') {
      return this.password.hasError('required') ? 'You must enter a value' :
        this.password.hasError('pattern') ? 'Not a valid password' :
          '';
    }
  }


  ngOnInit() {

  }


  login() {
    this.loginForm = {
      email: this.email.value,
      password: this.password.value
    };
    // console.log("values rae",this.loginForm);
    
    this.registerService.login(this.loginForm).subscribe(
      (response) => {
        // console.log(response.data[0].uCredentials.uEmail)
        sessionStorage.setItem('uEmail', response.data[0].uCredentials.uEmail);
        // sessionStorage.setItem('uEmail',)
        alert(`You are successfully logged in as ${sessionStorage.getItem('uEmail')}`);
        this.router.navigate(['/dashboard']);
      },
      (errorResponse) => {
        this.errorMessage = errorResponse.error.message;
        alert(this.errorMessage);
        this.router.navigate(['/login']);
        sessionStorage.clear();
      }
    );
  }
}
