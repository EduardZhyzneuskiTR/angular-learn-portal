import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemManagementPanelComponent } from './course-item-management-panel.component';

describe('CourseItemManagementPanelComponent', () => {
  let component: CourseItemManagementPanelComponent;
  let fixture: ComponentFixture<CourseItemManagementPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemManagementPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemManagementPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
