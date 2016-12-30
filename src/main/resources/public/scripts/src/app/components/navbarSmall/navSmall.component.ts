import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { City } from '../../models/aggregate/city.model';
import { User } from '../../models/aggregate/user.model';
import * as _ from 'lodash';

@Component({
	selector: 'navbar-small',
	templateUrl: 'navSmall.component.html',
	styleUrls: ['navSmall.component.scss']
})
export class NavSmallComponent {

  @Input() cities: City[];
  @Input() user: User;

	private otherCities: City[];
  private selectedCity: City;
  private isOpen: boolean = false;

	constructor(
		  private userService: UserService
  	) {
  		this.isOpen = false;
  	}

  	public ngOnInit() {
      if (this.user && this.cities && this.cities.length) {
        this.otherCities = _.difference(this.cities, [this.selectedCity]);
        this.selectedCity = this.user.preference.city;
      }
  	}

    public ngOnChanges() {
      if (this.user && this.cities && this.cities.length) {
        this.otherCities = _.difference(this.cities, [this.selectedCity]);
        this.selectedCity = this.user.preference.city;
      }
    }

    private toggleDropdown($event: MouseEvent): void {
      $event.preventDefault();
      $event.stopPropagation();
      this.isOpen = !this.isOpen;
    }

    private setCity($event: MouseEvent, city: City): void {
      this.userService.setCity(this.user, city)
        .subscribe(data => {
          this.userService.updateUserPreference(data);
        })
    }

}