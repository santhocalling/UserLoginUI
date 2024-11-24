import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {SignUp} from "../model/SignUp";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form: any = {
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {firstName,lastName, username, email, password } = this.form;

    const signUp: SignUp = {
      userName: username,
      password: password,
      lastName: lastName,
      email:email,
      firstName:firstName

    };

    this.authService.register(signUp).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
