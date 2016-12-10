import { Pipe } from '@angular/core';
import { Property } from '../models/aggregate/property.model';
import * as _ from 'lodash';

@Pipe({
  name: "orderBy"
})
export class OrderByPipe {
  transform(array: Array<Property>, args: string): Array<Property> {
    if (!array) return array;
    return _.sortBy(array, (p) =>  p.name);
  }
}