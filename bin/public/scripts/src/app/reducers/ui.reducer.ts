import * as ui from '../actions/ui.action';
import { Observable } from 'rxjs';

export interface State {
  loaded: boolean;
};

const initialState: State = {
  loaded: false
};

export function reducer(state = initialState, action: ui.Actions): State {
  switch (action.type) {
    case ui.ActionTypes.LOAD_SUCCESS:
      return state; //_.merge({}, state, { loaded : true });
    default:
      return state;
  }
};