import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../services/breadcrumbs.service';
import { Breadcrumb } from '../models/breadcrumb.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'alp-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public currentBreadcrumbs: Breadcrumb[] = [];
  private currentParams: Params;

  constructor(
    private breadcrumbsService: BreadcrumbsService,
    private route: ActivatedRoute) {
      this.route.params.subscribe(params => this.currentParams = params);
      this.breadcrumbsService.subscribe({ 
        next: (newBreadcrumbs) => this.currentBreadcrumbs = newBreadcrumbs
      });
    }

  ngOnInit(): void {

  }

  public cleanLinkData(routerLink: any[]): any[] {
    let result = [];
    for (let fragment of routerLink) {
      if ((fragment as string)?.indexOf(":") != -1) {
        let parameterValue = (fragment as string).split(":", 2)[1];
        result.push(parameterValue);
      }
      else {
        result.push(fragment);
      }
    }
    return result;
  }
}
