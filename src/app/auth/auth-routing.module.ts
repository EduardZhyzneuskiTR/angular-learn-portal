import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: LoginFormComponent,
        data: { breadcrumbs: [ { linkName: "login", routerLink: [ "login" ]}]}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }