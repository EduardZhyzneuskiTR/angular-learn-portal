import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public logIn(email: string, password: string): boolean {
    localStorage.setItem('email', email);
    localStorage.setItem('userId', "0");
    return true;
  }

  public logOut() {
    localStorage.clear();
    this.router.navigate([""]);
  }

  public isAuthenticated() : boolean {
    console.log("checking");
    return localStorage.getItem('email') != null;
  }

  public getUserInfo() : IUser {
    if (this.isAuthenticated())
      return new User(0, "fake", "fake");
  }
}
