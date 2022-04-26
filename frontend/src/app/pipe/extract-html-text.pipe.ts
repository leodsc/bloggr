import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractHtmlText',
})
export class ExtractHtmlTextPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string | null {
    const span = document.createElement('span');
    span.innerHTML = value;
    return span.textContent;
  }
}
