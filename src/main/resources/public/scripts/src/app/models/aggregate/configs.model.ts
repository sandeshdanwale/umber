import { Config } from './config.model';

export class Configs {
   	
   	configs: Array<Config>;
  
	constructor(data: any) {
	    this.configs = data.configs;
    }

}
