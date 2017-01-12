import * as ui from '../actions/ui.action';
import { Observable } from 'rxjs';
import { Panel, SearchDetailPanel } from '../models/aggregate/ui.model';
import { Property } from '../models/aggregate/property.model';
import * as _ from 'lodash';

export interface State {
  loaded: boolean;
  activePanels: Panel[];
  searchDetailListLoader: boolean;
  activeSearchDetailPanel: SearchDetailPanel;
  selectedProperty: Property;
};

const initialState: State = {
  loaded: false,
  activePanels: [],
  searchDetailListLoader: false,
  activeSearchDetailPanel: null,
  selectedProperty: null
};

export function reducer(state = initialState, action: ui.Actions): State {
  switch (action.type) {
    case ui.ActionTypes.LOAD_SUCCESS:
      return {
        loaded: true,
        activePanels: action.payload,
        searchDetailListLoader: false,
        activeSearchDetailPanel: null,
        selectedProperty: null
      }
    case ui.ActionTypes.OPEN_PANEL:
      return _.merge({}, state, {activePanels: _.uniqBy(_.union(state.activePanels, [action.payload]), 'name')})
    case ui.ActionTypes.CLOSE_PANEL:
    return {
        loaded: true,
        activePanels: _.filter(state.activePanels, (p) => p.name !== action.payload.name),
        searchDetailListLoader: false,
        activeSearchDetailPanel: state.activeSearchDetailPanel,
        selectedProperty: null
      }
    case ui.ActionTypes.OPEN_PROPERTY_DETAIL_OVERLAY:
      return {
        loaded: true,
        activePanels: _.uniqBy(_.union(state.activePanels, [new Panel('propertyDetailOverlay')]), 'name'),
        searchDetailListLoader: false,
        activeSearchDetailPanel: state.activeSearchDetailPanel,
        selectedProperty: action.payload
      }
    case ui.ActionTypes.CLOSE_PROPERTY_DETAIL_OVERLAY:
      return {
        loaded: true,
        activePanels: _.filter(state.activePanels, (p) => p.name !== 'propertyDetailOverlay'),
        searchDetailListLoader: false,
        activeSearchDetailPanel: state.activeSearchDetailPanel,
        selectedProperty: null
      }
    case ui.ActionTypes.UPDATE_SEARCH_DETAIL:
      return {
        loaded: true,
        activePanels: state.activePanels,
        searchDetailListLoader: false,
        activeSearchDetailPanel: action.payload,
        selectedProperty: null
      }
    case ui.ActionTypes.SHOW_SEARCH_DETAIL_LIST_LOADER:
      return {
        loaded: true,
        activePanels: state.activePanels,
        searchDetailListLoader: action.payload,
        activeSearchDetailPanel: state.activeSearchDetailPanel,
        selectedProperty: null
      }
    default:
      return state;
  }
};

export function getActivePanels(state$: Observable<State>) {
  return state$.select(state => state.activePanels);
}

export function getActiveSearchDetailPanel(state$: Observable<State>) {
  return state$.select(state => state.activeSearchDetailPanel);
}

export function getSearchDetailListLoader(state$: Observable<State>) {
  return state$.select(state => state.searchDetailListLoader);
}

export function getSelectedProperty(state$: Observable<State>) {
  return state$.select(state => state.selectedProperty);
}