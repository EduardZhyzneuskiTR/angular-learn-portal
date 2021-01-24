import { EventEmitter, forwardRef, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'alp-course-edit-duration',
  templateUrl: './course-edit-duration.component.html',
  styleUrls: ['./course-edit-duration.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CourseEditDurationComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useValue: (c: FormControl) => {
      let durationValue = +(c.value as string);
      if (isNaN(durationValue)) {
        return { shouldBeNumber: true };
      }
      if (durationValue > 10000) {
        return { tooLong: true };
      }
      return null;
    },
    multi: true
  }]
})
export class CourseEditDurationComponent implements OnInit, ControlValueAccessor {
  private _duration: number;
  private propagateChange = (_: any) => {};

  get duration(): number {
    return this._duration;
  }
  @Input() 
  set duration(value: number) {
    this._duration = value;
    this.propagateChange(this.duration);
  };
  @Output() durationChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  writeValue(obj: any): void {
    this.duration = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(_fn: any): void {
  }

  ngOnInit(): void {
  }

  changed($event: any) {
    this.duration = $event.target.value;
    this.durationChange.emit(this.duration);
  }
}
