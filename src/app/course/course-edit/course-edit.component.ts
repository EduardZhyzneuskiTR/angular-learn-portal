import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlpPageComponent } from 'src/alp-page-component';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';
import { CourseStorageService } from '../services/course-storage.service';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'alp-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent extends AlpPageComponent implements OnInit {
  private currentId: number = NaN;

  courseEditForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    date: new FormControl('', [Validators.required, Validators.pattern(/\d{1,2}\/\d{1,2}\/20\d{1,2}/)]),
    duration: new FormControl(0, [Validators.required]),
    authors: new FormControl([], [Validators.required])
  });

  get title() { return this.courseEditForm.get('title'); }
  get description() { return this.courseEditForm.get('description'); }
  get date() { return this.courseEditForm.get('date'); }
  get duration() { return this.courseEditForm.get('duration'); }
  get authors() { return this.courseEditForm.get('authors'); }

  constructor(
    private router: Router,
    private coursesStorage: CourseStorageService,
    route: ActivatedRoute,
    breadcrumbsService: BreadcrumbsService) { 
      super(route, breadcrumbsService);
    }

  ngOnInit(): void {
    super.ngOnInit();
    this.route.params.subscribe(p => {
      let id = Number(p["id"]);
      if (!Number.isNaN(id)) {
        this.currentId = id;
        this.coursesStorage.getItem(this.currentId).subscribe(course => {
          let date = new Date(course.date);
          this.courseEditForm.setValue({
            title: course.name,
            description: course.description,
            date: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
            duration: course.length,
            authors: []
          })
        });
      }
    });
    this.route.url.subscribe(url => {
      if (url[url.length - 1].path == "new") {
        this.currentId = NaN;
        this.courseEditForm.setValue({
          title: '',
          description: '',
          date: '',
          duration: 0,
          authors: []
        })
      }
    })
  }

  public save(): void {
    let editResult = this.courseEditForm.value;
    let course: ICourse = { 
      id: this.currentId, 
      name: editResult.title, 
      date: new Date(editResult.date),  
      length: editResult.duration, 
      description: editResult.description
    };
    (Number.isNaN(this.currentId) ? this.coursesStorage.insertItem(course) : this.coursesStorage.updateItem(course))
      .subscribe(_course => { this.router.navigate(["courses", "list"]) });
  }
}
