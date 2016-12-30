import { PropertyId, DeveloperId, AggregateRoot, Address } from './aggregate.model';
import { Configs } from './configs.model';
import * as _ from 'lodash';

export class Property implements AggregateRoot<PropertyId> {
   	
   	id: PropertyId;
   	developerId: DeveloperId;
   	developerName: string;
   	cityName: string;
	name: string;
	description: string;
	featured: boolean;
	addresses: Array<Address>;
	configs: Configs;
  
	constructor(data: any) {
	    this.id = new PropertyId(data.id.registrationId);
	    this.name = data.name;
	    this.description = data.description;
	    this.featured = data.featured;
	    this.developerName = data.developerName;
	    this.cityName = data.cityName;
	    this.addresses = [];
	    _.each(data.addresses, (address) => this.addresses.push(new Address(address)));
	    this.configs = new Configs(data);
    }

}
