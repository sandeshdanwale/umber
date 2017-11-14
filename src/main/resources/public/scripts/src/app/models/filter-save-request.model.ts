import { CityId, AggregateRoot, Address } from './aggregate.model';

export class FilterSaveRequest {
    type: string;
	minSqft: number;
	maxSqft: number;
	minPrice: number;
	maxPrice: number;

  constructor(data: any) {
    this.type = data.type;
    this.minSqft = data.minSqft;
    this.maxSqft = data.maxSqft;
    this.minPrice = data.minPrice;
    this.maxPrice = data.maxPrice;
  }

}
