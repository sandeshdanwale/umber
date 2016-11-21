import { Developer } from '../models/aggregate/developer.model';
import * as developer from '../actions/developer.action';
import { Observable } from 'rxjs';

export interface State {
  loaded: boolean;
  entities: Location[];
};

const initialState: State = {
  loaded: false,
  entities: null
};

export function reducer(state = initialState, action: developer.Actions): State {
  switch (action.type) {
    case developer.ActionTypes.LOAD_SUCCESS:
      console.log('STORE:umber.developer/DEVELOPER_LOADED');
      return {
        loaded: true,
        entities: action.payload
      };
    default:
      return state;
  }

};

export function getDeveloperEntities(state$: Observable<State>) {
  return state$.select(state => state.entities);
}
