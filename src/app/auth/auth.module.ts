import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserProfileLinkComponent } from './user-profile-link/user-profile-link.component';
import { LogOutComponent } from './log-out/log-out.component';



@NgModule({
  declarations: [LoginFormComponent, UserHeaderComponent, UserProfileLinkComponent, LogOutComponent],
  exports: [ LoginFormComponent, UserHeaderComponent ],
  imports: [ CommonModule ]
})
export class AuthModule { }
