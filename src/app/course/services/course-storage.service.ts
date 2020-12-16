import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, ICourse } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseStorageService {
  private coursesUrl: string = "http://localhost:3004/courses";

  constructor(private httpClient: HttpClient) { }

   public getList(start: number = 0, count: number = 10): Observable<ICourse[]> {
     console.log(`Starting from ${start}, getting ${count}`);
     return this.httpClient.get<ICourse[]>(`${this.coursesUrl}?start=${start}&count=${count}`);
   }

   public getItem(id: number): Observable<ICourse> {
     return this.httpClient.get<ICourse>(`${this.coursesUrl}/${id}`);
   }

   public insertItem(newItem: ICourse): Observable<ICourse> {
     return this.httpClient.post<ICourse>(this.coursesUrl, newItem);
   }

   public updateItem(updatedItem: ICourse): Observable<ICourse> {
     return this.httpClient.patch<ICourse>(`${this.coursesUrl}/${updatedItem.id}`, updatedItem);
   }

   public removeItem(id: number) {
     this.httpClient.delete(`${this.coursesUrl}/${id}`);
   }
}
