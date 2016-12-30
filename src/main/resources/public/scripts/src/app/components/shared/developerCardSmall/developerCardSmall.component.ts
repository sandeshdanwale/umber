import { Component, Input } from '@angular/core';
import { Developer } from '../../../models/aggregate/developer.model';

@Component({
	selector: 'developerCardSmall',
	templateUrl: 'developerCardSmall.component.html',
	styleUrls: ['developerCardSmall.component.scss']
})
export class DeveloperCardSmallComponent {

	@Input() developer: Developer;
	style: any;
	constructor(
  	) {
  	}

  	ngOnInit() {
      this.style = 'url(/assets/images/developerlogo.jpg)';
  	}

  	ngOnChanges() {
      this.style = 'url(/assets/images/developerlogo.jpg)';
  	}

    get displayDeveloperName(): any {
      return this.developer ? this.developer.name : '';
    }
}