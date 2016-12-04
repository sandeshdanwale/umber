import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { DeveloperService } from './developer.service';
import { PropertyService } from './property.service';
import { LocationService } from './location.service';
import * as location from '../actions/location.action';
import * as developer from '../actions/developer.action';
import * as property from '../actions/property.action';
import * as ui from '../actions/ui.action';
import { Panel } from '../models/aggregate/ui.model';

@Injectable()
export class AggregationService {

  constructor(private developerService: DeveloperService,
      private propertyService: PropertyService,
      private locationService: LocationService,
      private store: Store<fromRoot.State>) {
  }

  public load(): void {
      
      // move this inside fork join with ui.getactivepanel which return observable
      let panel = new Panel('main');
      let activePanels: Array<Panel> = [];
      activePanels.push(panel);

      Observable.forkJoin(
            this.developerService.getFeaturedDevelopers(),
            this.propertyService.getFeaturedProperties(),
            this.locationService.getFeaturedLocations()
        ).subscribe(data => {
            this.store.dispatch(new developer.LoadSuccessAction(data[0]));
            this.store.dispatch(new property.LoadSuccessAction(data[1]));
            this.store.dispatch(new location.LoadSuccessAction(data[2]));
            this.store.dispatch(new ui.LoadSuccessAction(activePanels));
      });
  }
}
