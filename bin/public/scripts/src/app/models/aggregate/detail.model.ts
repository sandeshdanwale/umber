import { LocationId, AggregateRoot, Address } from './aggregate.model';

export class Detail implements AggregateRoot<LocationId> {
  id: LocationId;

  constructor(data: any) {
    this.id = new LocationId(data.id);
  }

}
