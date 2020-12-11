import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlpPageComponent } from 'src/alp-page-component';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'alp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent extends AlpPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    route: ActivatedRoute,
    breadcrumbsService: BreadcrumbsService) {
    super(route, breadcrumbsService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public logIn(email: string, password: string) {
    if (this.authService.logIn(email, password)) {
      this.router.navigate([""]);
    }
  }
}
