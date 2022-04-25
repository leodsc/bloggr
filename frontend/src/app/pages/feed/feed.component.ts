import { Component, HostListener, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Post } from 'src/app/model/Post';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { MenuItem } from 'primeng/api';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  user: User;
  posts: Post[];
  post = new Post();
  items: MenuItem[];
  dialog = {
    show: false,
    title: '',
  };

  @HostListener('window:click', ['$event'])
  closeModalIfOpen(event: any) {
    if (this.dialog.show) {
      const isClickOutsideModal = [...event.target.classList].some(
        (_class) => _class == 'p-component-overlay'
      );
      isClickOutsideModal ? (this.dialog.show = false) : null;
    }
  }

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {
    this.user = this.userService.info;
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe((resp: Post[]) => {
      console.log(resp);
      this.posts = resp;
    });
    this.items = [
      {
        icon: 'custom-icon add-icon',
        command: () => {
          this.mutateDialog({ title: 'Novo Post' });
        },
      },
      {
        icon: 'custom-icon search-icon',
        command: () => {
          this.mutateDialog({ title: 'Procurar Usuário' });
        },
      },
    ];
  }

  mutateDialog(info: any) {
    this.dialog = { ...info };
    this.toggleDialog();
  }

  toggleDialog() {
    this.dialog.show = !this.dialog.show;
  }

  sendPost() {
    console.log(this.post);
  }

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ header: [1, 2, 3] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ align: ['', 'center', 'right', 'justify'] }],
      [{ color: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
    ],
  };
}
