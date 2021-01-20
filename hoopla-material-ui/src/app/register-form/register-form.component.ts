import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../login/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  successMessage: string;
  errorMessage: String;

  constructor(private fb: FormBuilder, private regService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z ]*[A-Za-z]$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{7,21}$/)]],
      emailId: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+(@)(infosys|infy|gmail)(.)(com|co.in)$/)]],
      dob: ['', [Validators.required, this.validateDate]],
      mobNo: ['', [Validators.required,Validators.pattern(/^[1-9]{1}[0-9]{9}$/)]]
      // address:['',[Validators.required,Validators.min(10)]]
    })
  }

  register() {
    this.errorMessage = null;
    this.successMessage = null;
    // console.log(this.registerForm);

    this.regService.registerUser(this.registerForm.value).subscribe(
      (success) => {
        this.successMessage = success.message;
      },
      (error) => {
        this.errorMessage = error;
      }
    )
    this.router.navigate(["/login"]);
  }

  validateMobNo(c: FormControl) {
    // console.log(c.value);
    let pattern = /^[1-9]{1}[0-9]{9}$/
    if (pattern.test(c.value)) {
      return null
    }
    else {
      return { mobNoError: "Please enter valid Phone Number" }
    }

  }

  validateDate(c: FormControl) {
    let today = new Date();
    let enteredDate = new Date(c.value);
    if (today > enteredDate) {
      return null;
    } else {
      return {
        dobErr: "Your DOB cannot be today's date or greater"
      }
    }
  }


  validatePass(c: FormControl) {
    // console.log(c.value);
    let pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{7,21}$/
    if(pattern.test(c.value)){
      return null 
    }
    else {
        return { passError: "Should be 7-20 character long consisting of alphabets, digits and !,@,#,$,%,^,& or *" }
      }

    // let uCaseCheck = /[a-z]/;
    // let lCaseCheck = /[A-Z]/;
    // let digitCheck = /[0-9]/;
    // let specialCharCheck = /[!@#$%^&*]/;
    // let strLength = new String(c.value).length;

    // if (uCaseCheck.test(c.value) && lCaseCheck.test(c.value) && digitCheck.test(c.value) && specialCharCheck.test(c.value) && (strLength >= 7 && strLength <= 20)) {
    //   return null;
    // }
    // else {
    //   return { passError: "Should be 7-20 character long consisting of alphabets, digits and !,@,#,$,%,^,& or *" }
    // }

    // let uChar = 0
    // let lChar = 0
    // let dChar = 0
    // let sChar = 0;

    // for (const val of c.value) {
    //   if (val >= "A" && val <= "Z") {
    //     uChar = 1
    //   }
    //   else if (val >= "a" && val <= "z") {
    //     lChar = 1;
    //   } else if (val >= "0" && val <= "9") {
    //     dChar = 1
    //   } else if (val == "!" || val == "@" || val == "#" || val == "$" || val == "%" || val == "^" || val == "&" || val == "*") {
    //     sChar = 1;
    //   }
    //   if ((c.value).length < 6 && (c.value).length > 20) {
    //     return { passError: "Should be 7-20 character long consisting of alphabets, digits and !,@,#,$,%,^,& or *" }
    //   }
    //   else {
    //     if (uChar == 1 && lChar == 1 && dChar == 1 && sChar == 1) {
    //       return null;
    //     }
    //   }
    // }

  }

  validateEmail(c: FormControl) {
    // console.log(c.value);
    let pattern = /^[A-Za-z0-9]+(@)(infosys|infy|gmail)(.)(com|co.in)$/
    if (pattern.test(c.value)) {
      return null
    }
    else {
      return { emailIdErr: "Email Id format is wrong." }
    }


  }


  validateUser(c: FormControl) {
    console.log(c.value);
    let pattern = /^[A-Za-z][A-Za-z ]*[A-Za-z]$/
    if (pattern.test(c.value)) {
      return null
    }
    else {
      return { userErr: "Should be 5-10 character long consisting of alphabets, digits and *,# or_ " }
    }

  }
}
