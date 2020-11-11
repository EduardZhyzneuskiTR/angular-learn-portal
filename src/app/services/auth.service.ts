import { Injectable } from '@angular/core';
import { IUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public logIn(email: string, password: string) {
    localStorage.setItem('email', email);
    localStorage.setItem('userId', "0");
  }

  public logOut() {
    localStorage.clear();
    console.log("Logged out");
  }

  public isAuthenticated() : boolean {
    return localStorage.getItem('email') != null;
  }

  public getUserInfo() : IUser {
    if (this.isAuthenticated())
      return new User(0, "fake", "fake");
  }
}
