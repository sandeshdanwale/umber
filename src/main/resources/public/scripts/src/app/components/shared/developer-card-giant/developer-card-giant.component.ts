import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../../../models/aggregate/developer.model';
import { Property } from '../../../models/aggregate/property.model';
import * as _ from 'lodash';

@Component({
  selector: 'developer-card-giant',
  templateUrl: './developer-card-giant.component.html',
  styleUrls: ['./developer-card-giant.component.scss']
})
export class DeveloperCardGiantComponent implements OnInit {

  @Input() developer: Developer;
  @Input() properties: Property[];
  setProperties: any;
  
	constructor(
  	) {
  	}

  	ngOnInit() {}

  	ngOnChanges() {
    }

    get displayPropeties(): any {
      return this.properties ? this.properties.slice(0, 2) : null;
    }

    get imageUrl() {
      let id = '3500'; //this.developer.id.registrationId
      return `/assets/images/developer/dev${id}/developerlogo.jpg`;
    }

}
