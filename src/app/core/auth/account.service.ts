import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { IUser } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  URL_SERVER = environment.backend

  private userIdentity: IUser | null = null;
  private authenticationState = new ReplaySubject<IUser | null>(1);
  private accountCache$?: Observable<Account | null>;
  constructor(private http: HttpClient) { }





  private fecth(): Observable<IUser>{
    
    return this.http.get<IUser>(`${this.URL_SERVER}/api/account`)
  }
}
