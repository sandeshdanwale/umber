import { CityId, AggregateRoot, Address } from './aggregate.model';

export class City implements AggregateRoot<CityId> {
   	
   	id: CityId;
   	rank: number;
	name: string;
	primary: string;
	featured: boolean;
  
	constructor(data: any) {
	    this.id = new CityId(data.id || data.cityId.registrationId);
	    this.name = data.name;
	    this.rank = data.rank;
	    this.featured = data.featured;
	    
    }

}
