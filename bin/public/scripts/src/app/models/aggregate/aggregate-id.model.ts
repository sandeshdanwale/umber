export interface AggregateId {
  asString(): string;
}

export class LocationId implements AggregateId {
  public identifier: number;

  constructor(id: number) {
    this.identifier = id;
  }

  public asString(): string {
    return this.identifier.toString();
  }
}

export class DetailId implements AggregateId {
  public identifier: number;

  constructor(id: number) {
    this.identifier = id;
  }

  public asString(): string {
    return this.identifier.toString();
  }
}

export class PropertyId implements AggregateId {

  public identifier: number;

  constructor(id: number) {
    this.identifier = id;
  }

  public asString(): string {
    return this.identifier.toString();
  }
}

export class DeveloperId implements AggregateId {

  public identifier: number;

  constructor(id: number) {
    this.identifier = id;
  }

  public asString(): string {
    return this.identifier.toString();
  }
}

export interface AggregateRoot<T extends AggregateId> {
  id: T;
}

