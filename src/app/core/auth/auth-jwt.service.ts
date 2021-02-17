import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { ILogin } from '../login/login.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {
  URL_SERVER = environment.backend;
  constructor(private http: HttpClient) { }

  login(credentials: ILogin): Observable<void> {
    return this.http.post(`${this.URL_SERVER}/api/auth/login`, credentials)
    .pipe(map( (res: any) => {
      this.authenticateSuccess(res.token, credentials.rememberMe)
      this.saveUserId(res._id)
      return res;
    }))
  }


  private authenticateSuccess(response, rememberMe): void{
    if(rememberMe){
      localStorage.setItem('auth-token',  response)
    }else{
      sessionStorage.setItem('auth-token', response)
    }
  }

  loggout(): Observable<void>{
    return new Observable((observer)=> {
      localStorage.removeItem('auth-token')
      sessionStorage.removeItem('auth-token')
      observer.complete()
    })
    
  }

  private saveUserId(response): void {
    localStorage.setItem('comfeco-user-id', response)
  }

}
