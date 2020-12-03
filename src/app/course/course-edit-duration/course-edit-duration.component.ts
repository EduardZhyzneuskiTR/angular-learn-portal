import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alp-course-edit-duration',
  templateUrl: './course-edit-duration.component.html',
  styleUrls: ['./course-edit-duration.component.css']
})
export class CourseEditDurationComponent implements OnInit {
  showedDuration: number = 0;
  @Output() duration: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  changed($event: any) {
    this.showedDuration = $event.target.value;
    this.duration.emit(this.showedDuration);
  }
}
