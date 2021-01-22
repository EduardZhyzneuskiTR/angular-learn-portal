import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, tap } from "rxjs/operators";
import { TokenResponse, UserInfo } from "src/app/models/user.model";
import * as AuthActions from "./auth-store.actions";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private httpClient: HttpClient,
        private router: Router
    ) {}

    initialLoad$ = createEffect( () => this.actions$.pipe(
        ofType(AuthActions.initialLoad),
        map(_action => localStorage.getItem("AuthToken") !== null 
            ? AuthActions.userRequest({ payload : { token : localStorage.getItem("AuthToken")}})
            : AuthActions.logOut() )
    ));

    getUserInfo$ = createEffect( () => this.actions$.pipe(
        ofType(AuthActions.userRequest),
        concatMap(action => this.httpClient
            .post<UserInfo>("http://localhost:3004/auth/userinfo", action.payload)
            .pipe(
                map(userInfo => AuthActions.userRequestSuccess(userInfo)),
                catchError(_error => { console.log(_error); return of(AuthActions.logOut())})
            )
        )
    ));

    login$ = createEffect( () => this.actions$.pipe(
        ofType(AuthActions.login),
        concatMap(action => this.httpClient
            .post<TokenResponse>("http://localhost:3004/auth/login", action.payload)
            .pipe(
                map(tokenResponse => {
                    localStorage.setItem("AuthToken", tokenResponse.token);
                    this.router.navigate([""]);
                    return AuthActions.loginSuccess(tokenResponse); 
                }),
                catchError(_error => {
                    localStorage.removeItem("AuthToken");
                    return of(AuthActions.loginFail());
                })
            )
        )
    ));

    loginSuccess$ = createEffect( () => this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        map(action => AuthActions.userRequest({ payload: { token: action.token } }))
    ));

    logout$ = createEffect( () => this.actions$.pipe(
        ofType(AuthActions.logOut),
        tap(() => { 
            localStorage.removeItem("AuthToken");
            this.router.navigate(["login"]);
        })
    ), { dispatch: false });
}