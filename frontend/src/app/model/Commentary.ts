import { Post } from './Post';
import { User } from './User';

export class Commentary {
  user: User;
  post: Post;
  date: Date;
  text: string;
}
