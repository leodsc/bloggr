import { Post } from './Post';

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  birthday: Date;
  posts: Post;
}
