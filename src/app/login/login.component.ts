import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')
  ]));
  hide = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : '';
  }
  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :
        // tslint:disable-next-line:max-line-length
        ((this.password.hasError('minLength') ? 'Password must be minimum 8 characters, must have at least 1 upper case letter, and at least 1 special character' : (this.password.hasError('pattern') ? 'Password must be minimum 8 characters, must have at least 1 upper case letter, and at least 1 special character' : '')));
  }

  login (email, password) {
    console.log(email.value, password.value);
    this.router.navigate(['/listview']);
  }

}
