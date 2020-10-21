import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alp-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {

  public searchText: string;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    console.log("Click");
    console.log(this.searchText);
  }
}
