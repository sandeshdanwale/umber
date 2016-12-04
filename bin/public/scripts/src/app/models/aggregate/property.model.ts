import { PropertyId, DeveloperId, AggregateRoot, Address } from './aggregate.model';
import { Configs } from './configs.model';

export class Property implements AggregateRoot<PropertyId> {
   	
   	id: PropertyId;
   	developerId: DeveloperId;
	name: string;
	description: string;
	featured: boolean;
	addresses: Array<Address>;
	configs: Configs;
  
	constructor(data: any) {
	    this.id = new PropertyId(data.id);
	    this.name = data.name;
	    this.description = data.description;
	    this.featured = data.featured;
	    for (let address in data.addresses) {
	    	this.addresses.push(new Address(address));
	    }
	    this.configs = new Configs(data.configs);
    }

}
