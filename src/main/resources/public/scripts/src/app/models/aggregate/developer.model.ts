import { DeveloperId, AggregateRoot, Address } from './aggregate.model';

export class Developer implements AggregateRoot<DeveloperId> {
   	
   	id: DeveloperId;
   	name: string;
	description: string;
	featured: boolean;
    addresses: Array<Address>
  
	constructor(data: any) {
	    this.id = new DeveloperId(data.id);
	    this.name = data.name;
	    this.description = data.description;
	    this.featured = data.featured;
	    for (let address in data.addresses) {
	    	this.addresses.push(new Address(address));
	    }
	    
    }

}
