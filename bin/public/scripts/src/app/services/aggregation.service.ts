import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { DeveloperService } from './developer.service';
import { PropertyService } from './property.service';
import { LandmarkService } from './landmark.service';
import { CityService } from './city.service';
import { UserService } from './user.service';
import * as city from '../actions/city.action';
import * as developer from '../actions/developer.action';
import * as property from '../actions/property.action';
import * as defaultProperty from '../actions/defaultProperty.action';
import * as globalProperty from '../actions/globalProperty.action';
import * as globalDeveloper from '../actions/globalDeveloper.action';
import * as landmark from '../actions/landmark.action';
import * as ui from '../actions/ui.action';
import * as user from '../actions/user.action';
import { Panel } from '../models/aggregate/ui.model';
import { User } from '../models/aggregate/user.model';
import { Preference } from '../models/aggregate/preference.model';
import { City } from '../models/aggregate/city.model';
import { Developer } from '../models/aggregate/developer.model';
import { Property } from '../models/aggregate/property.model';
import { Landmark } from '../models/aggregate/landmark.model';
import { UserId } from '../models/aggregate/aggregate.model';
import * as _ from 'lodash';

@Injectable()
export class AggregationService {

  constructor(private developerService: DeveloperService,
      private propertyService: PropertyService,
      private cityService: CityService,
      private landmarkService: LandmarkService,
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
          this.userService.getUserPreferences('1'),
          this.cityService.getAllCities()
        ).subscribe(data => {
          let selectedCity = new City(data[0].city);
          let cityId = selectedCity.id.registrationId;
          cityId = cityId ? cityId : '9';
          let preference = new Preference({city :
            selectedCity
          });
          let serverUser = new User({
            id: data[0].userId.registrationId,
            preference: preference
          })
          this.store.dispatch(new user.LoadSuccessAction(serverUser));
          this.store.dispatch(new city.LoadSuccessAction(data[1]));
          Observable.forkJoin(
            this.developerService.getFeaturedDevelopers(cityId),
            this.propertyService.getFeaturedProperties(cityId),
            this.propertyService.getGlobalFeaturedProperties(),
            this.developerService.getGlobalFeaturedDevelopers(),
            this.landmarkService.getFeaturedLandmarks(cityId)
          ).subscribe(/*data => {
            this.store.dispatch(new developer.LoadSuccessAction(data[0].slice(0, 13)));
            this.store.dispatch(new property.LoadSuccessAction(data[1].slice(0, 13)));
            this.store.dispatch(new defaultProperty.LoadSuccessAction(data[1].slice(0, 4)));
            this.store.dispatch(new landmark.LoadSuccessAction(data[2].slice(0, 13)));
            this.store.dispatch(new ui.LoadSuccessAction(activePanels));
          }*/
          ([developers, properties, globalProperties, globalDevelopers, landmarks]) => {
            let _developers = _.slice(
                                  _.map(developers, (d) => d && new Developer(d)),
                                  0, 13);
            let _properties = _.slice(
                                  _.map(properties, (d) => d && new Property(d)),
                                  0, 13);
            let _defaultProperties = _.slice(
                                  _.map(properties, (d) => d && new Property(d)),
                                  0, 4);
            let _globalProperties = _.slice(
                                  _.map(globalProperties, (d) => d && new Property(d)),
                                  0, 8);
            let _globalDevelopers = _.slice(
                                  _.map(globalDevelopers, (d) => d && new Developer(d)),
                                  0, 8);
            let _landmarks = _.slice(
                                  _.map(landmarks, (d) => d && new Landmark(d)),
                                  0, 13);
            this.store.dispatch(new developer.LoadSuccessAction(_developers));
            this.store.dispatch(new property.LoadSuccessAction(_properties));
            this.store.dispatch(new defaultProperty.LoadSuccessAction(_defaultProperties));
            this.store.dispatch(new globalProperty.LoadSuccessAction(_globalProperties));
            this.store.dispatch(new globalDeveloper.LoadSuccessAction(_globalDevelopers));
            this.store.dispatch(new landmark.LoadSuccessAction(_landmarks));
            this.store.dispatch(new ui.LoadSuccessAction(activePanels));
          });
        })
      
  }
}
