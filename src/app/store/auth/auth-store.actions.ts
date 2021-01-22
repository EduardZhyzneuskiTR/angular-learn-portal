import { props } from "@ngrx/store";
import { createAction } from "@ngrx/store";
import { TokenResponse, UserInfo } from "src/app/models/user.model";

export const initialLoad = createAction("[Auth] initialLoad");
export const userRequest = createAction("[Auth] userRequest", props<{ payload: { token: string } }>());
export const userRequestSuccess = createAction("[Auth] userRequestSuccess", props<UserInfo>());
export const login = createAction("[Auth] login", props<{ payload: { login: string, password: string} }>());
export const loginSuccess = createAction("[Auth] loginSuccess", props<TokenResponse>());
export const loginFail = createAction("[Auth] loginFail");
export const logOut = createAction("[Auth] LogOut");