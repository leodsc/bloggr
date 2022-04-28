import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  authenticated: boolean = false;
  token: string | null;
  user: User;

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

  reset() {
    this.authenticated = false;
    this.token = null;
    this.user = new User();
  }

  randomAvatarBackgroundColor() {
    const [red, green, blue] = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
