import { Component, OnInit, ViewChild } from '@angular/core';
import { FormAction } from 'src/app/classes/FormAction';
import { User } from 'src/app/model/User';
import { MessageService } from 'primeng/api';
import { labels } from './signup.label.content';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService],
})
export class SignupComponent implements OnInit {
  user = new User();
  confirmPassword: string;
  redirect: number = 5;
  @ViewChild('birthdayInput') birthdayInput: any;

  constructor(
    private message: MessageService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  signup() {
    this.user.birthday = new Date(this.birthdayInput.inputFieldValue);
    this.userService.signup(this.user).subscribe(
      (resp: User) => {
        this.message.add({
          key: 'message',
          severity: 'success',
          summary: 'Cadastro realizado!',
          detail: `${resp.name}, você foi cadastrado com sucesso!`,
          life: 4000,
        });
        console.log(this.user);
        setTimeout(() => {
          this.router.navigate(['/entrar']);
        }, 4000);
      },
      (error: any) => {
        this.message.add({
          key: 'userExists',
          severity: 'error',
          sticky: true,
          summary: 'Usuário já cadastrado!',
        });
      }
    );
  }
}
