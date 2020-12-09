import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alp-course-edit-duration',
  templateUrl: './course-edit-duration.component.html',
  styleUrls: ['./course-edit-duration.component.css']
})
export class CourseEditDurationComponent implements OnInit {
  private _duration: number;

  get duration(): number {
    return this._duration;
  }
  @Input() 
  set duration(value: number) {
    this._duration = value;
  };
  @Output() durationChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  changed($event: any) {
    this._duration = $event.target.value;
    this.durationChange.emit(this.duration);
  }
}
