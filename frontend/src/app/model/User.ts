import { Post } from './Post';

export class User {
  name: string;
  email: string;
  password: string;
  birthday: Date;
  posts: Post;
}
