import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  SERVER_API_URL = environment.backend;
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req || !req.url || (req.url.startsWith('http') && !(this.SERVER_API_URL && req.url.startsWith(this.SERVER_API_URL)))) {
      return next.handle(req);
    }

    const token = localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token');
    if(token){
      req = req.clone({
        setHeaders : {
          'Authorization': token
        }
      })
      
    }

    return next.handle(req)
  }


  
}
