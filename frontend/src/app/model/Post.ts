import { Commentary } from './Commentary';
import { User } from './User';

export class Post {
  title: string;
  text: string;
  date: Date;
  user: User;
  commentary: Commentary;
  pinned: boolean;
}
