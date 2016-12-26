import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { City } from '../../models/aggregate/city.model';
import { User } from '../../models/aggregate/user.model';
import * as _ from 'lodash';

@Component({
	selector: 'navbar',
	templateUrl: 'nav.component.html',
	styleUrls: ['nav.component.scss']
})
export class NavComponent {

  @Input() cities: City[];
  @Input() user: User;
  @Output() userCity = new EventEmitter();

	private primaryCities: City[];
  private secondaryCities: City[];
  private selectedCity: City;
  private isOpen: boolean = false;

	constructor(
		  private userService: UserService
  	) {
  		this.isOpen = false;
  	}

  	public ngOnInit() {
      if (this.user && this.cities && this.cities.length) {
        this.primaryCities = 
          _.slice(_.uniqBy(_.union([this.user.preference.city], _.filter(this.cities, (city) => city && city.primary)), (city) => city && city.name), 0, 4);
        this.secondaryCities = _.difference(this.cities, this.primaryCities);
        this.selectedCity = this.user.preference.city;
      }
  	}

    public ngOnChanges() {
      if (this.user && this.cities && this.cities.length) {
        this.primaryCities = 
          _.slice(_.uniqBy(_.union([this.user.preference.city], _.filter(this.cities, (city) => city && city.primary)), (city) => city && city.name), 0, 4);
        this.secondaryCities = _.difference(this.cities, this.primaryCities);
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