import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseItemManagementPanelComponent } from './course-item-management-panel/course-item-management-panel.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseEditFormComponent } from './course-edit-form/course-edit-form.component';
import { FormsModule } from '@angular/forms';
import { CreationDateStylingDirective } from './directives/creation-date-styling.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { CourseEditDurationComponent } from './course-edit-duration/course-edit-duration.component';
import { CourseEditAuthorsComponent } from './course-edit-authors/course-edit-authors.component';
import { CourseRoutingModule } from './course-routing.module';



@NgModule({
  declarations: [CourseListComponent, CourseSearchComponent, CourseListItemComponent, CourseItemManagementPanelComponent, CourseEditComponent, CourseEditFormComponent, CreationDateStylingDirective, DurationPipe, CourseEditDurationComponent, CourseEditAuthorsComponent ],
  exports: [ CourseListComponent, CourseEditComponent ],
  imports: [ CourseRoutingModule, CommonModule, FormsModule ]
})
export class CourseModule { }
