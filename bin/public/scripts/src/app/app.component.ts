import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';
import { AggregationService } from './services/aggregation.service';
import { UserService } from './services/user.service';
import { User } from './models/aggregate/user.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [AggregationService]
})
export class AppComponent {

	user: Observable<User>;
	constructor(
		private aggregationService: AggregationService,
		private userService: UserService
	) {
      	this.user = this.userService.user;
	}

	public ngOnInit() {
		this.aggregationService.load();
	}

	closeSearchOverlay() {
		console.log('here I am')
	}
	
}