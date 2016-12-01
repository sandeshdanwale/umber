import {IUi} from './aggregate.model';

export class Panel {
	name: string;
	constructor (
		name: string
	) {
		this.name = name;
	}
}
/*
export class Ui implements IUi{
	panels: Array<Panel>;
  
	constructor(data: any) {
	    this.panels = data.panels;
    }

}
*/