import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseEdit } from 'src/app/models/course-edit.model';
import { Course, ICourse } from 'src/app/models/course.model';
import { CourseStorageService } from '../services/course-storage.service';

@Component({
  selector: 'alp-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  public editResult: CourseEdit;
  private currentId: number = NaN;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesStorage: CourseStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      let id = Number(p["id"]);
      if (!Number.isNaN(id)) {
        console.log("id: " + id);
        this.currentId = id;
        let course = this.coursesStorage.getItem(this.currentId);
        this.editResult = this.toEditModel(course);
      }
    });
    this.route.url.subscribe(url => {
      if (url[url.length - 1].path == "new") {
        this.currentId = NaN;
        console.log("new");
        this.editResult = new CourseEdit();
        this.editResult.duration = 0;
      }
    })
  }

  public save(): void {
    let course = new Course(this.currentId, this.editResult.title, this.editResult.creationDate, this.editResult.duration, this.editResult.description);
    this.coursesStorage.upsertItem(course);
    this.router.navigate(["courses", "list"]);
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
