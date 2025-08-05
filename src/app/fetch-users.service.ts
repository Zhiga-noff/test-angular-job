import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class FetchUsersService {
  private apiUrl = 'http://localhost:1000/users';

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this._http.get<UserInterface[]>(this.apiUrl);
  }
}
