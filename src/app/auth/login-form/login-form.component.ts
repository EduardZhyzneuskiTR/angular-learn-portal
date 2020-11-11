import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'alp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public logIn(email: string, password: string) {
    this.authService.logIn(email, password);
  }
}
