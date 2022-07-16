import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServiceService} from '../service/service.service';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Interseptor implements HttpInterceptor{
  constructor(public svc: ServiceService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({params: req.params.set(
        'id' , `${this.svc.user.id}`
      )
    });

    // return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
    //   if (error.status === 422) {
    //     console.log('You need to log in, error status = ' + error.status);
    //   }
    //   return throwError(error);
    // }));

    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        event = event.clone({body: Interseptor.modifyBody(event.body)});
      }
      return event;
    }));
  }

  private static modifyBody(body: any): void{
    // console.log(body);
  }
}
