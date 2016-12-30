import { DeveloperId, AggregateRoot, Address } from './aggregate.model';
import * as _ from 'lodash';

export class Developer implements AggregateRoot<DeveloperId> {
   	
   	id: DeveloperId;
   	name: string;
	description: string;
	featured: boolean;
    addresses: Array<Address>
  
	constructor(data: any) {
	    this.id = new DeveloperId(data.id.registrationId);
	    this.name = data.name;
	    this.description = data.description;
	    this.featured = data.featured;
	    this.addresses = [];
	    _.each(data.addresses, (address) => this.addresses.push(new Address(address)));
	    
    }

}
