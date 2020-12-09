import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseEdit } from 'src/app/models/course-edit.model';
import { Course, ICourse } from 'src/app/models/course.model';
import { CourseEditFormComponent } from '../course-edit-form/course-edit-form.component';
import { CourseStorageService } from '../services/course-storage.service';

@Component({
  selector: 'alp-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  @ViewChild(CourseEditFormComponent) courseEditForm: CourseEditFormComponent;
  private currentId: number = NaN;

  constructor(
    private route: ActivatedRoute,
    private coursesStorage: CourseStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      let id = Number(p["id"]);
      this.currentId = id;
      let course = this.coursesStorage.getItem(this.currentId);
      this.courseEditForm.courseEditModel = this.toEditModel(course);
    });
    this.route.url.subscribe(url => {
      if (url[url.length - 1].path == "new") {
        this.currentId = NaN;
        this.courseEditForm.courseEditModel = new CourseEdit();
      }
    })
  }

  public save(): void {
    let editResult = this.courseEditForm.courseEditModel;
    let course = new Course(this.currentId, editResult.title, editResult.creationDate, editResult.duration, editResult.description);
    this.coursesStorage.upsertItem(course);
  }

  private toEditModel(course: ICourse) : CourseEdit {
    let result = new CourseEdit();
    result.title = course.title;
    result.description = course.description;
    result.duration = course.duration;
    result.creationDate = course.creationDate;
    return result;
  }
}
