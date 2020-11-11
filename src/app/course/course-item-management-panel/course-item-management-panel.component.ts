import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/course.model';
import { CourseStorageService } from '../services/course-storage.service';

@Component({
  selector: 'alp-course-item-management-panel',
  templateUrl: './course-item-management-panel.component.html',
  styleUrls: ['./course-item-management-panel.component.css']
})
export class CourseItemManagementPanelComponent implements OnInit {
  @Input() public course: ICourse;

  constructor(private courseStorage: CourseStorageService) { }

  ngOnInit(): void {
  }

  public delete(id: number) {
    this.courseStorage.removeItem(id);
  }

}
