import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  info: User;

  constructor() {}

  loggedUserInfo(user: User) {
    user.birthday = new Date(user.birthday);
    this.info = user;
  }
}
