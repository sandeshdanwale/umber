import { Component, Input } from '@angular/core';
import { Property } from '../../../models/aggregate/property.model';
import { DisplayProperty } from '../../../models/displayProperty.model';
import * as _ from 'lodash';

@Component({
	selector: 'property-card-small',
	templateUrl: 'propertyCardSmall.component.html',
	styleUrls: ['propertyCardSmall.component.scss']
})
export class PropertyCardSmallComponent {

	@Input() property: Property;
  private style: any;

	constructor(
  	) {
  	}

  	ngOnInit() {
      this.style = 'url(/assets/images/logo.jpg)';
    }

    ngOnChanges() {
      this.style = 'url(/assets/images/logo.jpg)';
    }

  	get displayProperty(): any {
      let displayProperty = new DisplayProperty();
      displayProperty.address = this.getDisplayAddress();
      displayProperty.configs = this.getDisplayConfigs();
      displayProperty.price = this.getDisplayPrice();
      displayProperty.name = this.getDisplayPropertyName();
      displayProperty.developerName = this.getDisplayDeveloperName();
      return displayProperty;
    }

    private mapToCurrencyString(price: number|string): string {
      let displayPrice = ''
      let min = _.round((Number(price)/100000), 1);
      if (min > 100) {
        min = _.round(min/100, 1);
        displayPrice += min + 'Cr'
      } else {
        displayPrice += min + 'L'
      }
      return displayPrice;
    }

    private getDisplayPrice(): string {
      let displayPrice: string = '';
      if (this.property && this.property.configs) {
        let minVal = _.minBy(this.property.configs.configs, (c) => c.basePrice);
        let maxVal = _.maxBy(this.property.configs.configs, (c) => c.basePrice);
        if (minVal) {
          displayPrice += this.mapToCurrencyString(minVal.basePrice); 
        }
        if (maxVal) {
          if (minVal) {
            displayPrice += ' - '
          }
          displayPrice += this.mapToCurrencyString(maxVal.basePrice);
        }
      }
      return displayPrice;
    }

    private getDisplayPropertyName(): string{
      return this.property ? this.property.name : '';
    }

    private getDisplayDeveloperName(): string{
      return this.property ? this.property.developerName : '';
    }

    private getDisplayConfigs(): string {
      let is1BHK: boolean = false;
      let is2BHK: boolean = false;
      let is3BHK: boolean = false;
      let isRowhouse: boolean = false;
      let displayConfig: string = '';
      if (this.property && this.property.configs) {
        _.forEach(this.property.configs.configs, (c) => {
          if (c.type === '1bhk') is1BHK = true;
          if (c.type === '2bhk') is2BHK = true;
          if (c.type === '3bhk') is3BHK = true;
          if (c.type === 'rowhouse') isRowhouse = true;
        })
      }
      if (is1BHK) displayConfig += '1';
      if (is2BHK) displayConfig += !is1BHK ? '2' : ', 2';
      if (is3BHK) displayConfig += !is1BHK && !is2BHK ? '3' : ', 3';
      if (is1BHK || is2BHK || is3BHK) displayConfig += ' BHK Apartments'
      if (isRowhouse) displayConfig += !is1BHK && !is2BHK && !is3BHK ? 'RowHouses' : ', RowHouses';
      return displayConfig;
    }



    private getDisplayAddress(): string {
      if (this.property) {
        let address = _.head(_.filter(this.property.addresses, (p) => p.type.toString() === 'HOME'));
        if (address) {
          let lines = '';
          lines = !address.line1 ? lines : lines ? lines + ', ' + address.line1 : address.line1;
          lines = !address.line2 ? lines : lines ? lines + ', ' + address.line2 : address.line2;
          lines = !address.line3 ? lines : lines ? lines + ', ' + address.line3 : address.line3;

          let txt = lines + ', ' + address.city + ', ' + address.state;
          return txt.length > 35 ? txt.slice(0, 35) + ' ...' : txt;
        }
      }
      return '';
    }
}