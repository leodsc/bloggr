import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderLink } from 'src/app/classes/HeaderLinks';
import { AuthService } from 'src/app/service/auth.service';
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
    new HeaderLink(this.iconsPath + 'home.svg', 'Inicio'),
    new HeaderLink(this.iconsPath + 'door.svg', 'Entrar'),
    new HeaderLink(this.iconsPath + 'signup.svg', 'Cadastrar'),
  ];

  constructor(
    public auth: AuthService,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val instanceof NavigationEnd) {
        this.display = false;
        if (this.auth.authenticated) {
          this.links = [
            new HeaderLink(this.iconsPath + 'home.svg', 'Inicio'),
            new HeaderLink(this.iconsPath + 'user.svg', 'Perfil'),
            new HeaderLink(this.iconsPath + 'add.svg', 'Novo Post'),
            new HeaderLink(this.iconsPath + 'search.svg', 'Procurar'),
            new HeaderLink(this.iconsPath + 'config.svg', 'Configurações'),
            new HeaderLink(this.iconsPath + 'logout.svg', 'Sair'),
          ];
          console.log(this.links);
        }
      }
    });
  }

  toggleDisplay() {
    this.display = !this.display;
  }
}
