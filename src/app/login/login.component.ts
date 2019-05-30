import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm;
  isLoginSuccess = null;
  message: string = '';
  reEmail = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  user: any;

  constructor(  private formBuilder: FormBuilder, private router: Router) { 
    this.userForm = formBuilder.group({
      loginID: new FormControl('', [
        Validators.required,
        Validators.pattern(this.reEmail)
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngOnInit() {
  }
  login(data) {
    this.isLoginSuccess = true;
    if (this.userForm.invalid) {
      this.isLoginSuccess = false;
      this.message = 'Invalid Email Id or Password';
      return;
    } else {
      this.user = this.userForm.value;
      console.log(this.user);
      this.router.navigate(['/homePage']);
    }
  }

  forgotPasswordPage(){

  }
}
