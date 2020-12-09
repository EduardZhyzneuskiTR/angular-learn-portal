import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseEdit } from '../models/course-edit.model';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "list"
    },
    {
        path: "list",
        component: CourseListComponent
    },
    {
        path: "new",
        component: CourseEditComponent
    },
    {
        path: ":id",
        component: CourseEditComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }