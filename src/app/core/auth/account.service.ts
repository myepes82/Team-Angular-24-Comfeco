import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of, ReplaySubject } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment.prod';
import {createRequestOption} from '../../shared/utils/CreateRequestOption'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  URL_SERVER = environment.backend
  private userIdentity: IUser | null = null;
  private authenticationState = new ReplaySubject<IUser | null>(1);
  private accountCache$?: Observable<IUser | null>;
  constructor(private http: HttpClient) { }

  authenticate(identity: IUser | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
  }

  identity(force?: boolean): Observable<IUser | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.accountCache$ = this.fetch().pipe(
        catchError(() => {
          return of(null);
        }),
        tap((account: IUser | null) => {
          this.authenticate(account);
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getAuthenticationState(): Observable<IUser | null> {
    return this.authenticationState.asObservable();
  }


  private fetch(): Observable<IUser>{
    const id_user = localStorage.getItem('comfeco-user-id')
    const params= createRequestOption({id: id_user})
    return this.http.get<IUser>(`${this.URL_SERVER}/api/account`, {params})
  }
}
