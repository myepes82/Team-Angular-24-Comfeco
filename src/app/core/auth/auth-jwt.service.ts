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

}
