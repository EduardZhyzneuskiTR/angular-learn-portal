import { Component, OnInit } from '@angular/core';
import { CourseEdit } from 'src/app/models/course-edit.model';

@Component({
  selector: 'alp-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.css']
})
export class CourseEditFormComponent implements OnInit {

  courseEditModel: CourseEdit = new CourseEdit();
  
  constructor() { }

  ngOnInit(): void {
  }

}
