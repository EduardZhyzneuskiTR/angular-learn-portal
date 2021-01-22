import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initialLoad, login, logOut } from '../store/auth/auth-store.actions';
import { AuthState } from '../store/auth/auth-store.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated: boolean = false;
  private _token: string = "";

  constructor(private authStore: Store<{auth: AuthState}>) {
    this.authStore.select(state => state.auth.addressedLocalStorage).subscribe(initiated => {
      if (!initiated) {
        this.authStore.dispatch(initialLoad());
      }
    });
    this.authStore.select(state => state.auth.loggedIn).subscribe(loggedIn => { 
      this._isAuthenticated = loggedIn; 
    });
    this.authStore.select(state => state.auth.token).subscribe(token => {
      this._token = token !== undefined ? token : "";
    });
  }

  public logIn(email: string, password: string): void {
    this.authStore.dispatch(login({ payload: { login: email, password: password }}));
  }

  public logOut() {
    this.authStore.dispatch(logOut());
  }

  public isAuthenticated() : boolean {
    return this._isAuthenticated;
  }

  public getCurrentToken(): string {
    return this._token;
  }

  public getUserInfo() : Observable<string> {
    return this.authStore.select(state => state.auth.user);
  }
}
