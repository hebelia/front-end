import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  constructor(private auth: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var currentUser = this.auth.authUser;
    if (currentUser && currentUser.id) {
      req.clone({
        setHeaders: {
          Authorization: `Bearer " + ${currentUser.id}`, //returns "Person" information
        },
      });
    }
    return next.handle(req);
  }
}
