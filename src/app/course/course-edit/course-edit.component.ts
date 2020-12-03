import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseEdit } from 'src/app/models/course-edit.model';
import { CourseEditFormComponent } from '../course-edit-form/course-edit-form.component';

@Component({
  selector: 'alp-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  @ViewChild(CourseEditFormComponent) courseEditForm: CourseEditFormComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {
    console.log(`Tried to save ${JSON.stringify(this.courseEditForm.courseEditModel)}`);
  }
}
