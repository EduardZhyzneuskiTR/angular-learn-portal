import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';
import { ICourse } from 'src/app/models/course.model';
import { CourseStorageService } from '../services/course-storage.service';
import { AlpPageComponent } from 'src/alp-page-component';

@Component({
  selector: 'alp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CourseListComponent extends AlpPageComponent implements OnInit {

  public courses: ICourse[];
  public showAdd: boolean;

  constructor(
    private courseStorage: CourseStorageService,
    route: ActivatedRoute,
    breadcrumbsService: BreadcrumbsService) { 
      super(route, breadcrumbsService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.courses = this.courseStorage.getList();
  }

  public loadMore() {
    console.log("Load more!");
  }

}
