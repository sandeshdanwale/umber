import { LocationId, AggregateRoot } from './aggregate-id.model';

export class Location implements AggregateRoot<LocationId> {
  id: LocationId;

  constructor(data: any) {
    this.id = new LocationId(data.id);
  }

}
