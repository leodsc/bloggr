import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated: boolean = false;
  token: string | null;

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.server + 'teste');
  }

  login(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(environment.server + 'login', user, {
      observe: 'response',
    });
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(environment.server + 'signup', user);
  }
}
