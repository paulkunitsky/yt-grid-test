import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDigitsOfNumber'
})
export class GetDigitsOfNumberPipe implements PipeTransform {

  transform(value: number): Array<string> {
    if (value && value.toString()) {
      return Array.from(value.toString());
    } else {
      return [];
    }
  }

}
