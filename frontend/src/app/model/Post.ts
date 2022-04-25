import { Commentary } from './Commentary';
import { User } from './User';

export class Post {
  title: string;
  text: string;
  date: Date;
  user = new User();
  commentary: Commentary;
  pinned: boolean;
}
