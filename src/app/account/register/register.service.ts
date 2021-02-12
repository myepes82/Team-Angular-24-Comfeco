import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister } from 'src/app/shared/models/register.model';
import { IUser } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  URL_SERVER = environment.backend
  constructor(private http: HttpClient) { }

  register(data: IRegister): Observable<IUser> {
    return this.http.post<IUser>(`${this.URL_SERVER}/api/auth/register`, data)
  }
}
