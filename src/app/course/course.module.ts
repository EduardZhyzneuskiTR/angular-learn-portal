import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseItemManagementPanelComponent } from './course-item-management-panel/course-item-management-panel.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseEditFormComponent } from './course-edit-form/course-edit-form.component';
import { CourseManagementPanelComponent } from './course-management-panel/course-management-panel.component';
import { FormsModule } from '@angular/forms';
import { CreationDateStylingDirective } from './directives/creation-date-styling.directive';
import { DurationPipe } from './pipes/duration.pipe';



@NgModule({
  declarations: [CourseListComponent, CourseSearchComponent, AddCourseComponent, CourseListItemComponent, CourseItemManagementPanelComponent, CourseEditComponent, CourseEditFormComponent, CourseManagementPanelComponent, CreationDateStylingDirective, DurationPipe],
  exports: [ CourseListComponent, CourseEditComponent ],
  imports: [ CommonModule, FormsModule ]
})
export class CourseModule { }
