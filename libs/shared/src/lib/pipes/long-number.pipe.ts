import { Pipe, PipeTransform } from '@angular/core';
import { isDefined, toLongNumber } from '../utils';

@Pipe({
  name: 'longNumber'
})
export class LongNumberPipe implements PipeTransform {

  transform(value: string, def: string = ''): string {
    return isDefined(value) ? toLongNumber(value) : def;
  }

}
