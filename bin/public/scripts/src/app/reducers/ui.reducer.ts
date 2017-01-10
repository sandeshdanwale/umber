import * as ui from '../actions/ui.action';
import { Observable } from 'rxjs';
import {Panel, SearchDetailPanel} from '../models/aggregate/ui.model';

export interface State {
  loaded: boolean;
  activePanels: Panel[];
  searchDetailListLoader: boolean;
  activeSearchDetailPanel: SearchDetailPanel;
};

const initialState: State = {
  loaded: false,
  activePanels: null,
  searchDetailListLoader: false,
  activeSearchDetailPanel: null
};

export function reducer(state = initialState, action: ui.Actions): State {
  switch (action.type) {
    case ui.ActionTypes.LOAD_SUCCESS:
      return {
        loaded: true,
        activePanels: action.payload,
        searchDetailListLoader: false,
        activeSearchDetailPanel: null
      }
    case ui.ActionTypes.UPDATE_SEARCH_DETAIL:
      return {
        loaded: true,
        activePanels: state.activePanels,
        searchDetailListLoader: false,
        activeSearchDetailPanel: action.payload
      }
    case ui.ActionTypes.SHOW_SEARCH_DETAIL_LIST_LOADER:
      return {
        loaded: true,
        activePanels: state.activePanels,
        searchDetailListLoader: action.payload,
        activeSearchDetailPanel: state.activeSearchDetailPanel
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