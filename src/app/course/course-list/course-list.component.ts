import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/course.model';
import { CourseStorageService } from '../services/course-storage.service';

@Component({
  selector: 'alp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CourseListComponent implements OnInit {

  public courses: ICourse[];
  public showAdd: boolean;

  constructor(private courseStorage: CourseStorageService) { 
  }

  ngOnInit(): void {
    this.courses = this.courseStorage.getList();
  }

  public loadMore() {
    console.log("Load more!");
  }

}
