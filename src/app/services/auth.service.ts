import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private get currentToken(): string {
    return localStorage.getItem("authToken");
  }
  private set currentToken(value: string) {
    console.log(`Auth token now is ${value}`);
    localStorage.setItem("authToken", value);
  }

  constructor(
    private httpClient: HttpClient) { 
      if (localStorage.getItem("authToken") == undefined)
        localStorage.setItem("authToken", "");
    }

  public async logIn(email: string, password: string): Promise<boolean> {
    let result = false;
    await this.httpClient.post<TokenResponse>("http://localhost:3004/auth/login", { login: email, password: password }).toPromise()
      .then(tr => {
        this.currentToken = tr.token;
        result = true;
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        result = false;
      });
    return result;
  }

  public logOut() {
    this.currentToken = "";
  }

  public isAuthenticated() : boolean {
    return this.currentToken != "";
  }

  public getCurrentToken(): string {
    return this.currentToken;
  }

  public getUserInfo() : Observable<string> {
    if (this.isAuthenticated())
      return this.httpClient.post<UserInfo>("http://localhost:3004/auth/userinfo", { token: this.currentToken })
        .pipe(map(user => `${user.name.first} ${user.name.last}`));
    else
      return new Observable(subscriber => subscriber.next("Not logged in"));
  }
}

interface TokenResponse {
  token: string;
}

interface UserInfo {
  name: UserName
}

interface UserName {
  first: string;
  last: string;
}
