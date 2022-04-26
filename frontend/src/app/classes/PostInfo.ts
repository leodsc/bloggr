import { Post } from '../model/Post';

export class PostInfo {
  initials: string;
  private name: string;
  age: number;
  profession: string | null;
  post: Post;

  getInitials() {
    const nameArray = this.name.split(' ');
    this.initials = nameArray[0][0] + nameArray.splice(-1)[0];
  }

  constructor(name: string, age: number, profession: string, post: Post) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.post = post;
    this.getInitials();
  }
}
