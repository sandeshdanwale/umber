import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';

@Component({
  selector: 'property-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  @Input() property: Property[];
  constructor() { }

  ngOnInit() {
  }

}
