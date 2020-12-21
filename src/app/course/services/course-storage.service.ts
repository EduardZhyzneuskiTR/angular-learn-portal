import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, PartialObserver, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ICourse } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseStorageService {
  public searchStream: Subject<string> = new Subject<string>();

  private coursesUrl: string = "http://localhost:3004/courses";

  constructor(private httpClient: HttpClient) { 
    }

   public getList(start: number = 0, count: number = 10, textSearch: string = null): Observable<ICourse[]> {
     if (textSearch === null)
      return this.httpClient.get<ICourse[]>(`${this.coursesUrl}?start=${start}&count=${count}`);
     else
      return this.httpClient.get<ICourse[]>(`${this.coursesUrl}?start=${start}&count=${count}&textFragment=${textSearch}`);
   }

   public subscribeToChangedSearch(observer: PartialObserver<string>) : Subscription {
    return this.searchStream.pipe(
      map(value => value.length >= 3 ? value : null),
      distinctUntilChanged(),
      debounceTime(1000)
    ).subscribe(observer);
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

   public removeItem(id: number) : Observable<unknown>{
     return this.httpClient.delete(`${this.coursesUrl}/${id}`);
   }
}
