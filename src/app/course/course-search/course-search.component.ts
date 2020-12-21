import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { CourseStorageService } from '../services/course-storage.service';

@Component({
  selector: 'alp-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {

  constructor(private coursesStorage: CourseStorageService) { }

  ngOnInit(): void {
  }

  public keyUp($event): void {
    this.coursesStorage.searchStream.next($event.target.value);
  }
}
