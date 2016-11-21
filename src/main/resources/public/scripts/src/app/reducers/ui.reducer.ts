import * as ui from '../actions/ui.actions';
import { Observable } from 'rxjs';

export interface State {
  loaded: boolean;
};

const initialState: State = {
  loaded: false
};

export function reducer(state = initialState, action: ui.Actions): State {
  switch (action.type) {
    case ui.ActionTypes.LOAD:
      return _.merge({}, state, { loaded : false });
    case ui.ActionTypes.LOAD_SUCCESS:
      return _.merge({}, state, { loaded : true });
    default:
      return state;
  }
};

export function getLoaded(state$: Observable<State>) {
  return state$.select(state => state.loaded);
}