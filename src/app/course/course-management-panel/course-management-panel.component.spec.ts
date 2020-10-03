import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagementPanelComponent } from './course-management-panel.component';

describe('CourseManagementPanelComponent', () => {
  let component: CourseManagementPanelComponent;
  let fixture: ComponentFixture<CourseManagementPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseManagementPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManagementPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
