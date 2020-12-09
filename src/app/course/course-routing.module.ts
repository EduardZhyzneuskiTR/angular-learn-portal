import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseEdit } from '../models/course-edit.model';
import { CourseListComponent } from './course-list/course-list.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: CourseListComponent
    },
    {
        path: "new",
        component: CourseEdit
    },
    {
        path: ":id",
        component: CourseEdit
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }