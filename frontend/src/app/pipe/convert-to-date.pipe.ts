import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDate',
})
export class ConvertToDatePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    return new Date(value).toLocaleDateString();
  }
}
