import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';
import { AggregationService } from './services/aggregation.service';
import { UiService } from './services/ui.service';
import { UserService } from './services/user.service';
import { User } from './models/aggregate/user.model';
import { Panel } from './models/aggregate/ui.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [AggregationService]
})
export class AppComponent {

	user: Observable<User>;
	activePanels: Observable<Panel[]>;
	constructor(
		private aggregationService: AggregationService,
		private uiService: UiService,
		private userService: UserService
	) {
      	this.user = this.userService.user;
      	this.activePanels = this.uiService.activePanels;
	}

	public ngOnInit() {
		this.aggregationService.load();
	}

	closeSearchOverlay() {
		console.log('here I am')
	}
	
}