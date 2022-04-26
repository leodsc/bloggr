import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { httpMessage } from './login.message';
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

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private message: MessageService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.route.queryParams.subscribe((params) => {
      const httpCodeArray = Object.values(params);
      if (httpCodeArray.length != 0) {
        const messages: any = [];
        httpCodeArray.forEach((httpCode) => {
          console.log(httpCode);
          messages.push(httpMessage[Number(httpCode)]);
        });
        this.message.addAll(messages);
      }
    });
  }

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
