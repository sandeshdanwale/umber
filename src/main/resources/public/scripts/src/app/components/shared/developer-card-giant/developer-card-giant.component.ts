import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../../../models/aggregate/developer.model';
import { Property } from '../../../models/aggregate/property.model';
import { User } from '../../../models/aggregate/user.model';
import * as _ from 'lodash';

@Component({
  selector: 'developer-card-giant',
  templateUrl: './developer-card-giant.component.html',
  styleUrls: ['./developer-card-giant.component.scss']
})
export class DeveloperCardGiantComponent implements OnInit {

  @Input() developer: Developer;
  @Input() properties: Property[];
  @Input() user: User;

  setProperties: any;
  
	constructor(
  	) {
  	}

  	ngOnInit() {}

  	ngOnChanges() {
    }

    get displayPropeties(): any {
      return _.take(this.developer.properties, 4);
    }

    get imageUrl() {
      let id = '3500'; //this.developer.id.registrationId
      return `/assets/images/developer/dev${id}/developerlogo.jpg`;
    }

}
