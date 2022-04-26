import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomAvatarBackgroundColor',
})
export class RandomAvatarBackgroundColorPipe implements PipeTransform {
  transform(value: null, ...args: unknown[]): string {
    const [red, green, blue] = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
