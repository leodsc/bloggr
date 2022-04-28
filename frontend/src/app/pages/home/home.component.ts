import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.router.events.forEach((event) => {
    //   if (event instanceof NavigationEnd && event.url === '/sair') {
    //     this.auth.reset();
    //   }
    // });
    console.log(this.userService.user);
  }
}
