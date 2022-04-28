import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderLink } from 'src/app/classes/HeaderLinks';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  display: boolean = false;
  iconsPath: string = 'assets/icons/header/';
  links: HeaderLink[] = [
    new HeaderLink(this.iconsPath + 'home.svg', 'Inicio', 'inicio'),
    new HeaderLink(this.iconsPath + 'door.svg', 'Entrar', 'entrar'),
    new HeaderLink(this.iconsPath + 'signup.svg', 'Cadastrar', 'cadastrar'),
  ];

  constructor(private router: Router, public userService: UserService) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val instanceof NavigationEnd) {
        this.display = false;
        if (this.userService.authenticated) {
          this.links = [
            new HeaderLink(this.iconsPath + 'home.svg', 'Inicio', 'inicio'),
            new HeaderLink(this.iconsPath + 'user.svg', 'Perfil', 'perfil'),
            new HeaderLink(
              this.iconsPath + 'config.svg',
              'Configurações',
              'config'
            ),
            new HeaderLink(this.iconsPath + 'logout.svg', 'Sair', 'sair'),
          ];
        } else {
          this.links = [
            new HeaderLink(this.iconsPath + 'home.svg', 'Inicio', 'inicio'),
            new HeaderLink(this.iconsPath + 'door.svg', 'Entrar', 'entrar'),
            new HeaderLink(
              this.iconsPath + 'signup.svg',
              'Cadastrar',
              'cadastrar'
            ),
          ];
        }
      }
    });
  }

  toggleDisplay() {
    this.display = !this.display;
  }
}
