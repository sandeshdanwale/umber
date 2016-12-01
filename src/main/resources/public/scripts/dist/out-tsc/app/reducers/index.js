import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromLocation from './location.reducer';
import * as fromDeveloper from './developer.reducer';
import * as fromProperty from './property.reducer';
import * as fromDetail from './detail.reducer';
import * as fromUi from './ui.reducer';
import { environment } from '../../environments/environment';
;
var reducers = {
    location: fromLocation.reducer,
    developer: fromDeveloper.reducer,
    property: fromProperty.reducer,
    detail: fromDetail.reducer,
    ui: fromUi.reducer
};
var developmentReducer = compose(storeFreeze, combineReducers)(reducers);
var productionReducer = combineReducers(reducers);
export function reducer(state, action) {
    if (environment.production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
export function getDeveloperState(state$) {
    return state$.select(function (state) { return state.developer; });
}
export function getLocationState(state$) {
    return state$.select(function (state) { return state.location; });
}
export function getPropertyState(state$) {
    return state$.select(function (state) { return state.property; });
}
export function getUiState(state$) {
    return state$.select(function (state) { return state.ui; });
}
export var getDeveloperEntities = compose(fromDeveloper.getDeveloperEntities, getDeveloperState);
export var getPropertyEntities = compose(fromProperty.getPropertyEntities, getPropertyState);
export var getLocationEntities = compose(fromLocation.getLocationEntities, getLocationState);
export var getActivePanels = compose(fromUi.getActivePanels, getUiState);
/*
export const getEquipmentSnapshots = compose(fromEquipment.getEquipmentSnapshots, getEquipmentState);
export const getEquipmentLoaded = compose(fromEquipment.getLoaded, getEquipmentState);

export const getTaskEntities = compose(fromTask.getTaskEntities, getTaskState);
export const getTaskSnapshots = compose(fromTask.getTaskSnapshots, getTaskState);

export const getReferenceEntities = compose(fromReferenceData.getReferenceDataEntities, getReferenceDataState);

export const getUser = compose(fromUser.getUser, getUserState);

export const getUILoaded = compose(fromUI.getLoaded, getUIState);
*/
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/index.js.map