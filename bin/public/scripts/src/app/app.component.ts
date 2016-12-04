import {Component} from '@angular/core';
import './rxjs-operators';
import {AggregationService} from './services/aggregation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [AggregationService]
})
export class AppComponent {

	constructor(
		private aggregationService: AggregationService
	) {

	}

	public ngOnInit() {
		this.aggregationService.load();
	}
}