import { DetailId, AggregateRoot } from './aggregate-id.model';

export class Detail implements AggregateRoot<DetailId> {
  id: DetailId;

  constructor(data: any) {
    this.id = new DetailId(data.id);
  }

}
