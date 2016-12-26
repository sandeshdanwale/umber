import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers, ActionReducer } from '@ngrx/store';
import * as fromCity from './city.reducer';
import * as fromDeveloper from './developer.reducer';
import * as fromProperty from './property.reducer';
import * as fromDetail from './detail.reducer';
import * as fromUi from './ui.reducer';
import * as fromUser from './user.reducer';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { City } from '../models/aggregate/city.model';
import { Developer } from '../models/aggregate/developer.model';
import { Property } from '../models/aggregate/property.model';
import { combineLatest } from 'rxjs/observable/combineLatest';

export interface State {
  city: fromCity.State,
  developer: fromDeveloper.State,
  property: fromProperty.State,
  detail: fromDetail.State,
  ui: fromUi.State,
  user: fromUser.State
};

const reducers = {
  city: fromCity.reducer,
  developer: fromDeveloper.reducer,
  property: fromProperty.reducer,
  detail: fromDetail.reducer,
  ui: fromUi.reducer,
  user: fromUser.reducer
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

export function getDeveloperState(state$: Observable<State>) {
  return state$.select(state => state.developer);
}

export function getCityState(state$: Observable<State>) {
  return state$.select(state => state.city);
}

export function getPropertyState(state$: Observable<State>) {
  return state$.select(state => state.property);
}

export function getUiState(state$: Observable<State>) {
  return state$.select(state => state.ui);
}

export function getUserState(state$: Observable<State>) {
  return state$.select(state => state.user);
}

export const getDeveloperEntities = compose(fromDeveloper.getDeveloperEntities, getDeveloperState);
export const getPropertyEntities = compose(fromProperty.getPropertyEntities, getPropertyState);
export const getCityEntities = compose(fromCity.getCityEntities, getCityState);
export const getUserEntities = compose(fromUser.getUserEntities, getUserState);
export const getActivePanels = compose(fromUi.getActivePanels, getUiState);
export const getActiveSearchDetailPanel = compose(fromUi.getActiveSearchDetailPanel, getUiState);
/*
export const getEquipmentSnapshots = compose(fromEquipment.getEquipmentSnapshots, getEquipmentState);
export const getEquipmentLoaded = compose(fromEquipment.getLoaded, getEquipmentState);

export const getTaskEntities = compose(fromTask.getTaskEntities, getTaskState);
export const getTaskSnapshots = compose(fromTask.getTaskSnapshots, getTaskState);

export const getReferenceEntities = compose(fromReferenceData.getReferenceDataEntities, getReferenceDataState);

export const getUser = compose(fromUser.getUser, getUserState);

export const getUILoaded = compose(fromUI.getLoaded, getUIState);
*/
