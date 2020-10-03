import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    CourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
