import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../model/Post';
import { UserPost } from '../model/UserPost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.server + 'post/all');
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(environment.server + 'post/create', post);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(environment.server + 'post', {
      params: { id: id },
    });
  }
}
