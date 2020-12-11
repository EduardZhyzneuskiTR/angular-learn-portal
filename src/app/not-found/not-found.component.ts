import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlpPageComponent } from 'src/alp-page-component';
import { BreadcrumbsService } from '../services/breadcrumbs.service';

@Component({
  selector: 'alp-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent extends AlpPageComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    breadcrumbsService: BreadcrumbsService) {
    super(route, breadcrumbsService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
