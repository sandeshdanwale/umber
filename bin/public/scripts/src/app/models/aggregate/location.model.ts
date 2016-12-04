import { LocationId, AggregateRoot, Address } from './aggregate.model';

export class Location implements AggregateRoot<LocationId> {
   	
   	id: LocationId;
   	rank: number;
	name: string;
	primary: string;
	featured: boolean;
  
	constructor(data: any) {
	    this.id = new LocationId(data.id);
	    this.name = data.name;
	    this.rank = data.rank;
	    this.featured = data.featured;
	    
    }

}
