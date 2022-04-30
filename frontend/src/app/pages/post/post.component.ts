import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { UserPost } from 'src/app/model/UserPost';
import { PostService } from 'src/app/service/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post = new Post();
  private postId: number;

  constructor(private router: Router, private postService: PostService) {
    this.postId = this.router.getCurrentNavigation()?.extras.state!['postId'];
  }

  ngOnInit(): void {
    this.postService.getPost(this.postId).subscribe((resp: Post) => {
      console.log(resp);
    });
  }
}
