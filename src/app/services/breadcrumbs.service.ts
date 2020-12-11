import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { PartialObserver, Subject } from 'rxjs';
import { Breadcrumb } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadcrumbs: Subject<Breadcrumb[]> = new Subject<Breadcrumb[]>();

  constructor() {
  }

  public setBreadcrumbs(breadcrumbs: Breadcrumb[], params: Params): void {
    this.updateBreadcrumbsWithParams(breadcrumbs, params);
    this.breadcrumbs.next(breadcrumbs);
  }

  public subscribe(observer: PartialObserver<Breadcrumb[]>) {
    this.breadcrumbs.subscribe(observer);
  }

  private updateBreadcrumbsWithParams(breadcrumbs: Breadcrumb[], params: Params): void{
    for (let breadcrumb of breadcrumbs) {
        breadcrumb.routerLink = breadcrumb.routerLink.map((fragment) => {
            if ((fragment as string).indexOf(":") != -1) {
                let parts = (fragment as string).split(":");
                let paramName = parts[0];
                return `${paramName}:${params[paramName]}`;
            }
            else {
                return fragment;
            }
        });
    }
}
}
