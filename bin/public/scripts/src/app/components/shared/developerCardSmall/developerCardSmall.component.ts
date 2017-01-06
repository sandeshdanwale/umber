import { Component, Input } from '@angular/core';
import { Developer } from '../../../models/aggregate/developer.model';

@Component({
	selector: 'developerCardSmall',
	templateUrl: 'developerCardSmall.component.html',
	styleUrls: ['developerCardSmall.component.scss']
})
export class DeveloperCardSmallComponent {

	@Input() developer: Developer;
	displayDeveloperName: string;
	style: any;
	constructor(
  	) {
  	}

  	ngOnInit() {
  		this.initDisplayContent();
  	}

  	ngOnChanges() {
  		this.initDisplayContent();
  	}

    private initDisplayContent() {
      	this.displayDeveloperName = this.getDisplayDeveloperName();
      	this.style = 'url(/assets/images/developerlogo.jpg)';
    }

    private getDisplayDeveloperName(): string{
      	return this.developer ? this.developer.name : '';
    }
}