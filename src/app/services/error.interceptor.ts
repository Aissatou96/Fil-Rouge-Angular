import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("test");
    
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].indexOf(err.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this.authService.logout();
        
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
  }))
  }
}