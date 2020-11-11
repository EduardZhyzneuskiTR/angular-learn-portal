import { Component, OnInit } from '@angular/core';
import { Course, ICourse } from 'src/app/models/course.model';
import { CourseStorageService } from '../services/course-storage.service';

@Component({
  selector: 'alp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses: ICourse[];

  constructor(private courseStorage: CourseStorageService) { 
  }

  ngOnInit(): void {
    this.courses = this.courseStorage.getList();
  }

  public loadMore() {
    console.log("Load more!");
  }

}
