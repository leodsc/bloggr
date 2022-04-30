import { Post } from './Post';

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  photo: File | null;
  birthday: Date;
  posts: Post;
}
