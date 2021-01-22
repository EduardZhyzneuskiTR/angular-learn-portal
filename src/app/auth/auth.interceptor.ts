import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.endsWith("auth/login")) {
      let authService = this.injector.get(AuthService);
      let token = authService.getCurrentToken();
      request.headers.append("Authorization", `Bearer ${token}`);
    }
    return next.handle(request);
  }
}
