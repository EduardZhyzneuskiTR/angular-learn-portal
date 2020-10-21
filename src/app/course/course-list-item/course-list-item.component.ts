import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'alp-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  @Input() public course: ICourse;

  constructor() { }

  ngOnInit(): void {
  }

}
