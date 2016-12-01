import { PropertyId, AggregateRoot } from './aggregate-id.model';

export class Property implements AggregateRoot<PropertyId> {
  id: PropertyId;

  constructor(data: any) {
    this.id = new PropertyId(data.id);
  }

}
