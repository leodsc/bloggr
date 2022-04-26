import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minimizePostText',
})
export class MinimizePostTextPipe implements PipeTransform {
  transform(value: string | null, ...args: unknown[]): unknown {
    const textArray = value?.split('');
    return textArray?.splice(0, 75).join('') + '...';
  }
}
