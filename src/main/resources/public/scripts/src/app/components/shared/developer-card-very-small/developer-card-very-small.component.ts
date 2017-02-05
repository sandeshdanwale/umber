import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../../../models/aggregate/developer.model';

@Component({
  selector: 'developer-card-very-small',
  templateUrl: './developer-card-very-small.component.html',
  styleUrls: ['./developer-card-very-small.component.scss']
})
export class DeveloperCardVerySmallComponent {

  @Input() developer: Developer;

  constructor(
  ) {
  }

  get imageUrl() {
    let id = '3500'; //this.developer.id.registrationId
    return `/assets/images/developer/dev${id}/developerlogo.jpg`;
  }

}
