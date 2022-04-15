import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterseptorsService implements HttpInterceptor{

  baseUrl: string;

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.modifyRequest(req));
  }

  private modifyRequest = (req: HttpRequest<any>): HttpRequest<any> => {
    if (req.url.startsWith('backend/')) {
      const url = this.baseUrl;
      req = req.clone({
        url: url + req.url
      });
    }
    return req;
  }
}
