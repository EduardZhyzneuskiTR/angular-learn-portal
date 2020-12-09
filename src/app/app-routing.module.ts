import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "courses"
    },

    {
        path: "login",
        loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule)
    },

    {
        path: "courses",
        loadChildren: () => import("./course/course.module").then((m) => m.CourseModule)
    },

    {
        path: "**",
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}