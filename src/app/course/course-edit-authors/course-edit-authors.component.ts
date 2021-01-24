import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'alp-course-edit-authors',
  templateUrl: './course-edit-authors.component.html',
  styleUrls: ['./course-edit-authors.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CourseEditAuthorsComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useValue: (c: FormControl) => {
      if (c.value.length == 0) {
        return { required: true }
      }
      return null;
    },
    multi: true
  }]
})
export class CourseEditAuthorsComponent implements OnInit, ControlValueAccessor {

  @Input() authors: string;
  @Output() authorsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  private propagateChange = (_: any) => {};

  constructor() { }

  writeValue(obj: any): void {
    let value = obj as string[];
    this.authors = value.join(', ');
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(_fn: any): void {
  }

  ngOnInit(): void {
  }

  changed($event: any) {
    let value : string[] = $event.target.value.split(',').map((author: string) => author.trim());
    this.authorsChange.emit(value);
    this.propagateChange(value);
  }
}
