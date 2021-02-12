import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user.model';
import { AccountService } from '../auth/account.service';
import { AuthJwtService } from '../auth/auth-jwt.service';
import { ILogin } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private jwtService: AuthJwtService,
              private accountService: AccountService) { }

  login(credentials: ILogin): Observable<IUser | null>{
    return this.jwtService.login(credentials).pipe(flatMap(()=> ))
  }
}
