import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BreadcrumbsService } from './app/services/breadcrumbs.service';

export class AlpPageComponent implements OnInit {
    private currentParams: Params;

    constructor (
        protected route: ActivatedRoute, 
        private breadcrumbsService: BreadcrumbsService) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => this.currentParams = params)
        this.route.data.subscribe((data) => {
            this.breadcrumbsService.setBreadcrumbs(data.breadcrumbs, this.currentParams);
        });
    }


}