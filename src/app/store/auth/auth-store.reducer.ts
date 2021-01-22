import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "./auth-store.actions";

export interface AuthState {
    token: string,
    user: string,
    loggedIn: boolean,
    addressedLocalStorage: boolean;
}

const emptyUser: string = "Not logged in";

const initalState: AuthState = {token: undefined, user: emptyUser, loggedIn: false, addressedLocalStorage: false};

const authReducers = createReducer(initalState,
    on(AuthActions.initialLoad, (state: AuthState): AuthState => ({ ...state, addressedLocalStorage: true })),
    on(AuthActions.logOut, (state: AuthState): AuthState => ({ ...state, token: undefined, user: emptyUser, loggedIn: false })),
    on(AuthActions.loginFail, (state: AuthState): AuthState => ({ ...state, token: undefined, user: emptyUser, loggedIn: false })),
    on(AuthActions.loginSuccess, (state: AuthState, tokenResponse): AuthState => ({...state, token: tokenResponse.token, loggedIn: true})),
    on(AuthActions.userRequestSuccess, (state: AuthState, userInfo): AuthState => ({...state, user: `${userInfo.name.first} ${userInfo.name.last}`, loggedIn: true}))
);

export default authReducers;