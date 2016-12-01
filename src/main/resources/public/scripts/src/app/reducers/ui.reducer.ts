import * as ui from '../actions/ui.action';
import { Observable } from 'rxjs';
import {Panel} from '../models/aggregate/ui.model';

export interface State {
  loaded: boolean;
  activePanels: Panel[];
};

const initialState: State = {
  loaded: false,
  activePanels: null
};

export function reducer(state = initialState, action: ui.Actions): State {
  switch (action.type) {
    case ui.ActionTypes.LOAD_SUCCESS:
      return {
        loaded: false,
        activePanels: action.payload
      }//state; //_.merge({}, state, { loaded : true });
    default:
      return state;
  }
};

export function getActivePanels(state$: Observable<State>) {
  return state$.select(state => state.activePanels);
}