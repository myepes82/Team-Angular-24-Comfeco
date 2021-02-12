import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user.model';
import { createRequestOption } from 'src/app/shared/utils/CreateRequestOption';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ActivateService {
  URL_SERVER  = environment.backend

  constructor(private http: HttpClient) { }

  verify(req?: any): Observable<IUser>{
    const options = createRequestOption(req)
    return this.http.get<IUser>(`${this.URL_SERVER}/api/auth/verify`, {params: options})
  }
}
