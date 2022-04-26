import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  ignoreAuthHeaderPaths = ['/login', '/signup'];

  constructor(private auth: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const path = new URL(req.url).pathname;
    const shouldIgnoreThisPath = this.ignoreAuthHeaderPaths.some(
      (value: string) => value == path
    );
    if (!shouldIgnoreThisPath) {
      if (this.auth.token == undefined) {
        // null check
        this.router.navigate(['/entrar'], {
          queryParams: { error: 401 },
        });
      }
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
