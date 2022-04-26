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

  randomAvatarBackgroundColor() {
    const [red, green, blue] = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
