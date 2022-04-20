import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { httpMessage } from './login.message';
import { Label } from 'src/app/classes/Label';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  user = new User();

  labels: Label[] = [
    new Label(
      'Email',
      'assets/icons/mail.svg',
      'Insira seu e-mail.',
      'email',
      'email',
      {
        email: '',
      }
    ),
    new Label(
      'Senha',
      'assets/icons/key.svg',
      'Insira sua senha.',
      'password',
      'password',
      {
        password: '',
      }
    ),
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService,
    private message: MessageService
  ) {}

  ngOnInit(): void {}

  login() {
    this.auth.login(this.user).subscribe(
      (response: HttpResponse<User>) => {
        this.userService.loggedUserInfo(response.body!);
        if (response.headers.get('Authorization') !== null) {
          this.auth.token = response.headers.get('Authorization');
        }
        this.auth.authenticated = true;
        this.router.navigate(['/feed']);
      },
      (error) => {
        if (error.status in httpMessage) {
          this.message.add(httpMessage[error.status]);
        } else this.message.add(httpMessage[500]);
      }
    );
  }
}
