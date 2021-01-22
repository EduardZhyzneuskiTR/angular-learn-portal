import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';
import { ICourse } from 'src/app/models/course.model';
import { CourseStorageService } from '../services/course-storage.service';
import { AlpPageComponent } from 'src/alp-page-component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'alp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CourseListComponent extends AlpPageComponent implements OnInit, OnDestroy {

  public courses: ICourse[] = [];
  public showAdd: boolean;
  private searchSubscription: Subscription;
  private currentSearch: string = null;

  constructor(
    private courseStorage: CourseStorageService,
    route: ActivatedRoute,
    breadcrumbsService: BreadcrumbsService) { 
    super(route, breadcrumbsService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.courseStorage.getList().subscribe(courses => this.courses = courses);
    this.searchSubscription = this.courseStorage.subscribeToChangedSearch({next: newSearch => {
      this.currentSearch = newSearch;
      this.courseStorage.getList(0, 10, this.currentSearch).subscribe(courses => this.courses = courses);
    }});
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  public loadMore() {
    this.courseStorage.getList(this.courses.length, 5, this.currentSearch).subscribe(loaded => this.courses.push(...loaded));
  }
}
