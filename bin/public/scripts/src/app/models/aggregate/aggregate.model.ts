export interface AggregateId {
  asString(): string;
}

export class CityId implements AggregateId {
  public registrationId: string;

  constructor(registrationId: string) {
    this.registrationId = registrationId;
  }
  
  public asString(): string {
    return this.registrationId.toString();
  }
}

export class UserId implements AggregateId {
  public registrationId: string;

  constructor(registrationId: string) {
    this.registrationId = registrationId;
  }
  
  public asString(): string {
    return this.registrationId.toString();
  }
}

export class DetailId implements AggregateId {
  public registrationId: string;

  constructor(registrationId: string) {
    this.registrationId = registrationId;
  }

  public asString(): string {
    return this.registrationId.toString();
  }
}

export class PropertyId implements AggregateId {

  public registrationId: string;

  constructor(registrationId: string) {
    this.registrationId = registrationId;
  }

  public asString(): string {
    return this.registrationId.toString();
  }
}

export class DeveloperId implements AggregateId {

  public registrationId: string;

  constructor(registrationId: string) {
    this.registrationId = registrationId;
  }

  public asString(): string {
    return this.registrationId.toString();
  }
}

export const enum AddressType {
    HOME
}

export interface IAddress {
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    type: AddressType;
}

export class Address implements IAddress {

    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    type: AddressType;

    constructor(address: any) {
        this.line1 = address.line1;
        this.line2 = address.line2;
        this.line3 = address.line3;
        this.city = address.city;
        this.state = address.state;
        this.postalCode = address.postalCode;
        this.country = address.country;
        this.type = address.type;
    }

}

export interface AggregateRoot<T extends AggregateId> {
  id: T;
}

export interface IUi {
  panels: Array<string>;
}

