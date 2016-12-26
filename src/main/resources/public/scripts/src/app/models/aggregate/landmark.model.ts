import { LandmarkId, CityId, AggregateRoot, Address } from './aggregate.model';

export class Landmark implements AggregateRoot<LandmarkId> {
   	
   	id: LandmarkId;
   	cityId: CityId
   	rank: number;
	name: string;
	featured: boolean;
  
	constructor(data: any) {
	    this.id = new LandmarkId(data.id || data.landmarkId.registrationId);
	    this.name = data.name;
	    this.rank = data.rank;
	    this.featured = data.featured;
	    
    }

}
