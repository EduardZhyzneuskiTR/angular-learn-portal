import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alp-course-edit-authors',
  templateUrl: './course-edit-authors.component.html',
  styleUrls: ['./course-edit-authors.component.css']
})
export class CourseEditAuthorsComponent implements OnInit {

  @Output() authors: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  changed($event: any) {
    this.authors.emit($event.target.value.split(','));
  }
}
