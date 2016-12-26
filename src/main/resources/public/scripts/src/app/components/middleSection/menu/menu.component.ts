import {Component} from '@angular/core';
import { CacheService } from '../../../services/cache.service';

@Component({
	selector: 'menu-bar',
	templateUrl: 'menu.component.html',
	styleUrls: ['menu.component.scss']
})
export class MenuComponent {

  actions = [];
	constructor(
    private cacheService: CacheService
  	) {
  		this.actions = ["Buy", "Rent"];
  	}

  	public ngOnInit() {

  	}

    public setMode(mode: string) {
      this.cacheService.mode = mode;
    }
}