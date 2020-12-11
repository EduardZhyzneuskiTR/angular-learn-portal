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
        component: CourseListComponent,
        data: { breadcrumbs: [ 
            { "linkName": "Courses", routerLink: ["courses"]},
            { "linkName": "List", routerLink: ["courses", "list"]} 
        ]}
    },
    {
        path: "new",
        component: CourseEditComponent,
        data: { breadcrumbs: [ 
            { "linkName": "Courses", routerLink: ["courses"]},
            { "linkName": "Create", routerLink: ["courses", "new"]} 
        ]}
    },
    {
        path: ":id",
        component: CourseEditComponent,
        data: { breadcrumbs: [ 
            { "linkName": "Courses", routerLink: ["courses"]},
            { "linkName": "Edit", routerLink: ["courses", "id:"]} 
        ]}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }