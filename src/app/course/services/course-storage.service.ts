import { Injectable } from '@angular/core';
import { Course, ICourse } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseStorageService {
  private courses: ICourse[];
  
  constructor() {
    this.courses= [
      new Course(1, "Angular", new Date(2019, 0, 1), 720, "Cool angular"),
      new Course(2, "React", new Date(2020, 11, 1), 900, "Cool react"),
      new Course(3, "Typescript", new Date(2020, 10, 9), 150, "Cool typescript")
    ];
   }

   public getList(): ICourse[] {
     return this.courses;
   }

   public getItem(id: number): ICourse {
     return this.courses.find(c => c.id == id);
   }

   public updateItem(updatedItem: ICourse) {
     let index = this.courses.findIndex(c => c.id == updatedItem.id);
     if (index >= 0) {
      this.courses[index] = updatedItem;
     }
   }

   public removeItem(id: number) {
     let index = this.courses.findIndex(c => c.id == id);
     if (index >= 0) {
      this.courses = this.courses.splice(index);
     }
   }
}
