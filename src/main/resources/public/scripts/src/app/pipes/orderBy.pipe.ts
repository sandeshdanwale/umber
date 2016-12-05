import { Pipe } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: "orderBy"
})
export class OrderByPipe {
  transform(array: Array<string>, args: string): Array<string> {
    if (!array) return array;
    return _.sortBy(array, (p) =>  p.name);
  }
}