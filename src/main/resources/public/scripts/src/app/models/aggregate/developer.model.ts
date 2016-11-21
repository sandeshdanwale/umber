import { DeveloperId, AggregateRoot } from './aggregate-id.model';

export class Developer implements AggregateRoot<DeveloperId> {
  id: DeveloperId;

  constructor(data: any) {
    this.id = new DeveloperId(data.id);
  }

}
