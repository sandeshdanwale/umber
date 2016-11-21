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
  location: fromLocation.state,
  developer: fromDeveloper.state,
  property: fromProperty.state,
  detail: fromDetail.state,
  ui: fromUI.state
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

export function getLocationState(state$: Observable<State>) {
  return state$.select(state => state.location);
}

export function getPropertyState(state$: Observable<State>) {
  return state$.select(state => state.property);
}

export function getDeveloperState(state$: Observable<State>) {
  return state$.select(state => state.developer);
}

export function getUIState(state$: Observable<State>) {
  return state$.select(state => state.ui);
}

export function getDetailState(state$: Observable<State>) {
  return state$.select(state => state.detail);
}

export const getEquipmentEntities = compose(fromEquipment.getEquipmentEntities, getEquipmentState);
export const getEquipmentSnapshots = compose(fromEquipment.getEquipmentSnapshots, getEquipmentState);
export const getEquipmentLoaded = compose(fromEquipment.getLoaded, getEquipmentState);

export const getTaskEntities = compose(fromTask.getTaskEntities, getTaskState);
export const getTaskSnapshots = compose(fromTask.getTaskSnapshots, getTaskState);

export const getReferenceEntities = compose(fromReferenceData.getReferenceDataEntities, getReferenceDataState);

export const getUser = compose(fromUser.getUser, getUserState);

export const getUILoaded = compose(fromUI.getLoaded, getUIState);
export const getUIOnline = compose(fromUI.getOnline, getUIState);
export const getUIActivePanels = compose(fromUI.getActivePanels, getUIState);
export const getUIActiveModals = compose(fromUI.getActiveModals, getUIState);

export const getZoneSetupEntities = compose(fromZoneSetup.getZoneEntities, getZoneSetupState);

export const getUI = function (state$: Observable<State>) {
  return combineLatest<boolean, boolean, string[]>(
    state$.let(getUILoaded),
    state$.let(getUIOnline),
    state$.let(getUIActivePanels)
  )
};

export const getBoard = function (state$: Observable<State>) {
  return combineLatest<Equipment[], Task[]>(
    state$.let(getEquipmentEntities),
    state$.let(getTaskEntities)
  )
    .map(([ equipment, tasks ]) => new Board(equipment, tasks));
};

export const getBoardSnapshot = function (state$: Observable<State>) {
  return combineLatest<Equipment[], Task[]>(
    state$.let(getEquipmentSnapshots),
    state$.let(getTaskSnapshots)
  ).map(([ equipment, tasks ]) => new Board(equipment, tasks));
};
