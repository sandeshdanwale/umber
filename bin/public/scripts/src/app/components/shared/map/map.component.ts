import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';
import * as _ from 'lodash';

@Component({
  selector: 'property-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  @Input() property: Property;
  constructor() { }

  ngOnInit() {
  }

  get zoom(): number {
  	return 18;
  }

  get latitude(): number {
  	let lat: number;
  	if (this.property) {
  		_.forEach(this.property.addresses, (a) => {
  			if (a.type === 'HOME' && a.latitude) {
  				lat = _.toNumber(a.latitude);
  			}
  		})
  	}
  	return lat;
  }

  get longitude(): number {
  	let lat: number;
  	if (this.property) {
  		_.forEach(this.property.addresses, (a) => {
  			if (a.type === 'HOME' && a.longitude) {
  				lat = _.toNumber(a.longitude);
  			}
  		})
  	}
  	return lat;
  }

}
