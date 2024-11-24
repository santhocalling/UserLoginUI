import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SignUp} from "../model/SignUp";

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      userName: username,
      password: password
    }, httpOptions);
  }

  register(signUp: SignUp): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      firstName: signUp.firstName,
      lastName: signUp.lastName,
      userName: signUp.userName,
      password: signUp.password,
      email: signUp.email
    }, httpOptions);
  }
}
