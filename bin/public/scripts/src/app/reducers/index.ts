import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers, ActionReducer } from '@ngrx/store';
import * as fromLocation from './location.reducer';
import * as fromDeveloper from './developer.reducer';
import * as fromProperty from './property.reducer';
import * as fromDetail from './detail.reducer';
import * as fromUI from './ui.reducer';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Location } from '../models/aggregate/location.model';
import { Developer } from '../models/aggregate/developer.model';
import { Property } from '../models/aggregate/property.model';
import { combineLatest } from 'rxjs/observable/combineLatest';

export interface State {
  location: fromLocation.State,
  developer: fromDeveloper.State,
  property: fromProperty.State,
  detail: fromDetail.State,
  ui: fromUI.State
};

const reducers = {
  location: fromLocation.reducer,
  developer: fromDeveloper.reducer,
  property: fromProperty.reducer,
  detail: fromDetail.reducer,
  ui: fromUI.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}