import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.server + 'post');
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(environment.server + 'post', post);
  }
}
