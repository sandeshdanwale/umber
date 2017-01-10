import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromCity from './city.reducer';
import * as fromLandmark from './landmark.reducer';
import * as fromDeveloper from './developer.reducer';
import * as fromProperty from './property.reducer';
import * as fromDefaultProperty from './defaultProperty.reducer';
import * as fromUi from './ui.reducer';
import * as fromUser from './user.reducer';
import * as fromTag from './tag.reducer';
import { environment } from '../../environments/environment';
;
var reducers = {
    city: fromCity.reducer,
    landmark: fromLandmark.reducer,
    developer: fromDeveloper.reducer,
    property: fromProperty.reducer,
    defaultProperty: fromDefaultProperty.reducer,
    tag: fromTag.reducer,
    ui: fromUi.reducer,
    user: fromUser.reducer
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
export function getCityState(state$) {
    return state$.select(function (state) { return state.city; });
}
export function getLandmarkState(state$) {
    return state$.select(function (state) { return state.landmark; });
}
export function getPropertyState(state$) {
    return state$.select(function (state) { return state.property; });
}
export function getDefaultPropertyState(state$) {
    return state$.select(function (state) { return state.defaultProperty; });
}
export function getTagState(state$) {
    return state$.select(function (state) { return state.tag; });
}
export function getUiState(state$) {
    return state$.select(function (state) { return state.ui; });
}
export function getUserState(state$) {
    return state$.select(function (state) { return state.user; });
}
export var getDeveloperEntities = compose(fromDeveloper.getDeveloperEntities, getDeveloperState);
export var getPropertyEntities = compose(fromProperty.getPropertyEntities, getPropertyState);
export var getDefaultPropertyEntities = compose(fromDefaultProperty.getDefaultPropertyEntities, getDefaultPropertyState);
export var getCityEntities = compose(fromCity.getCityEntities, getCityState);
export var getLandmarkEntities = compose(fromLandmark.getLandmarkEntities, getLandmarkState);
export var getUserEntities = compose(fromUser.getUserEntities, getUserState);
export var getActivePanels = compose(fromUi.getActivePanels, getUiState);
export var getTagEntities = compose(fromTag.getTagEntities, getTagState);
export var getActiveSearchDetailPanel = compose(fromUi.getActiveSearchDetailPanel, getUiState);
export var getSearchDetailListLoader = compose(fromUi.getSearchDetailListLoader, getUiState);
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/index.js.map