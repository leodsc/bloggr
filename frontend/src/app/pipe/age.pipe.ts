import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): number {
    const age = Number(new Date()) - Number(value);
    return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
  }
}
