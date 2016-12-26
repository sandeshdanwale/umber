import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { DeveloperService } from './developer.service';
import { PropertyService } from './property.service';
import { CityService } from './city.service';
import { UserService } from './user.service';
import * as city from '../actions/city.action';
import * as developer from '../actions/developer.action';
import * as property from '../actions/property.action';
import * as ui from '../actions/ui.action';
import * as user from '../actions/user.action';
import { Panel } from '../models/aggregate/ui.model';
import { User } from '../models/aggregate/user.model';
import { Preference } from '../models/aggregate/preference.model';
import { City } from '../models/aggregate/city.model';
import { UserId } from '../models/aggregate/aggregate.model';

@Injectable()
export class AggregationService {

  constructor(private developerService: DeveloperService,
      private propertyService: PropertyService,
      private cityService: CityService,
      private userService: UserService,
      private store: Store<fromRoot.State>) {
  }

  public load(): void {
      
      // move this inside fork join with ui.getactivepanel which return observable
      let panel = new Panel('main');
      let activePanels: Array<Panel> = [];
      activePanels.push(panel);
      let userId = new UserId('1');

      Observable.forkJoin(
            this.developerService.getFeaturedDevelopers(),
            this.propertyService.getFeaturedProperties(),
            this.cityService.getAllCities(),
            this.userService.getUserPreferences('1')
        ).subscribe(data => {
            this.store.dispatch(new developer.LoadSuccessAction(data[0]));
            this.store.dispatch(new property.LoadSuccessAction(data[1]));
            this.store.dispatch(new city.LoadSuccessAction(data[2]));
            let preference = new Preference({city :
              new City(data[3].city)
            });
            let serverUser = new User({
              id: data[3].userId.registrationId,
              preference: preference
            })
            this.store.dispatch(new user.LoadSuccessAction(serverUser));
            this.store.dispatch(new ui.LoadSuccessAction(activePanels));
      });
  }
}
