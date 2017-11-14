import { City } from './city.model';

export class Preference {
   	
   	city: City;
   	type: string;
   	minSqft: number;
	maxSqft: number;
	minPrice: number;
	maxPrice: number;
  
	constructor(data: any) {
	    this.city = data.city;
	    this.type = data.type;
    	this.minSqft = data.minSqft;
    	this.maxSqft = data.maxSqft;
    	this.minPrice = data.minPrice;
    	this.maxPrice = data.maxPrice;
    }

}
