import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personInitials',
})
export class PersonInitialsPipe implements PipeTransform {
  transform(value: String, ...args: unknown[]): string {
    const nameArray = value.split(' ');
    const firstNameChar = nameArray[0][0].toUpperCase();
    let lastNameChar = '';
    if (nameArray.length > 1) {
      lastNameChar = nameArray.splice(-1)[0][0].toUpperCase();
    }
    return firstNameChar + lastNameChar;
  }
}
