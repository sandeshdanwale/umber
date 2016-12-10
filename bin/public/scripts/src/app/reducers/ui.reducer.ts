import * as ui from '../actions/ui.action';
import { Observable } from 'rxjs';
import {Panel, SearchDetailPanel} from '../models/aggregate/ui.model';

export interface State {
  loaded: boolean;
  activePanels: Panel[];
  activeSearchDetailPanel: SearchDetailPanel;
};

const initialState: State = {
  loaded: false,
  activePanels: null,
  activeSearchDetailPanel: null
};

export function reducer(state = initialState, action: ui.Actions): State {
  switch (action.type) {
    case ui.ActionTypes.LOAD_SUCCESS:
      return {
        loaded: false,
        activePanels: action.payload,
        activeSearchDetailPanel: null
      }
    case ui.ActionTypes.UPDATE_SEARCH_DETAIL:
      return {
        loaded: false,
        activePanels: state.activePanels,
        activeSearchDetailPanel: action.payload
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