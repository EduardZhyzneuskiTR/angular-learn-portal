import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "courses",
        canActivate: [AuthGuard]
    },

    {
        path: "login",
        loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule)
    },

    {
        path: "courses",
        loadChildren: () => import("./course/course.module").then((m) => m.CourseModule),
        canActivateChild: [AuthGuard],
        canActivate: [AuthGuard]
    },

    {
        path: "**",
        component: NotFoundComponent,
        data: { breadcrumbs: [ {linkName: "Not found", routerLink: ["not-found"]}]}
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}