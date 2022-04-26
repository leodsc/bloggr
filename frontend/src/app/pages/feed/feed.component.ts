import { Component, HostListener, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { User } from 'src/app/model/User';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';
import { PostInfo } from 'src/app/classes/PostInfo';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [MessageService],
})
export class FeedComponent implements OnInit {
  user: User;
  posts: Post[];
  post = new Post();
  items: MenuItem[];
  postInfo: PostInfo;
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
    private postService: PostService,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    this.user = this.userService.info;
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe((resp: Post[]) => {
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
    this.post.user.id = this.userService.info.id;
    this.postService.createPost(this.post).subscribe(
      (resp: Post) => {
        console.log('oi');
        this.dialog.show = false;
        this.post = new Post();
        this.messageService.add({
          severity: 'success',
          closable: false,
          detail: 'Post criado!',
          life: 3000,
        });
      },
      (error) => {
        const errorDefault = { severity: 'error', closable: true, life: 10000 };
        console.log(error.error.errors);
        const errorsArray: any = [];
        error.error.errors.forEach((error: any) => {
          errorsArray.push({ ...errorDefault, summary: error.defaultMessage });
        });
        this.messageService.addAll(errorsArray);
      }
    );
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
