import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'alp-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public isAuthenticated() : boolean {
    return this.authService.isAuthenticated();
  }
}
