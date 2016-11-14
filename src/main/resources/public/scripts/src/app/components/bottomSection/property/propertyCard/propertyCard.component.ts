import { Component, Input } from '@angular/core';

@Component({
	selector: 'propertyCard',
	templateUrl: 'propertyCard.component.html',
	styleUrls: ['propertyCard.component.scss']
})
export class PropertyCardComponent {

	@Input() property;

	constructor(
  	) {
  	}

  	public ngOnInit() {
  	}
}