import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  ignoreAuthHeaderPaths = ['/login', '/signup'];

  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const path = new URL(req.url).pathname;
    const shouldIgnoreThisPath = this.ignoreAuthHeaderPaths.some(
      (value: string) => value == path
    );
    if (!shouldIgnoreThisPath) {
      req = this.addAuthHeaders(req);
    }
    return next.handle(req);
  }

  addAuthHeaders(req: HttpRequest<any>): HttpRequest<any> {
    const reqWithAuthHeader = req.clone({
      setHeaders: { Authorization: this.auth.token! },
    });
    return reqWithAuthHeader;
  }
}
