import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditAuthorsComponent } from './course-edit-authors.component';

describe('CourseEditAuthorsComponent', () => {
  let component: CourseEditAuthorsComponent;
  let fixture: ComponentFixture<CourseEditAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEditAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
