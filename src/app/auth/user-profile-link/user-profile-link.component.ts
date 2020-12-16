import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'alp-user-profile-link',
  templateUrl: './user-profile-link.component.html',
  styleUrls: ['./user-profile-link.component.css']
})
export class UserProfileLinkComponent implements OnInit {
  public userInfo: Observable<string>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
  }
}
