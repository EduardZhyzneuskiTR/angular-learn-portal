import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseEdit } from 'src/app/models/course-edit.model';

@Component({
  selector: 'alp-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.css']
})
export class CourseEditFormComponent implements OnInit {

  @Input() editResult: CourseEdit = new CourseEdit();
  @Output() editResultChange: EventEmitter<CourseEdit> = new EventEmitter<CourseEdit>();

  constructor() { }

  ngOnInit(): void {
  }

  public changed(): void {
    this.editResultChange.emit(this.editResult);
  }
}
