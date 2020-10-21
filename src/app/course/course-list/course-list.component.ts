import { Component, OnInit } from '@angular/core';
import { Course, ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'alp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses: ICourse[];

  constructor() { 
    this.courses = [
      new Course(1, "Angular", new Date(2019, 1, 1), 720, "Cool angular"),
      new Course(2, "React", new Date(2019, 4, 1), 900, "Cool react")
    ]
  }

  ngOnInit(): void {
  }

}
