import { Location } from '../models/aggregate/location.model';
import * as location from '../actions/location.action';
import { Observable } from 'rxjs';

export interface State {
  loaded: boolean;
  entities: Location[];
};

const initialState: State = {
  loaded: false,
  entities: null
};

export function reducer(state = initialState, action: location.Actions): State {
  switch (action.type) {
    case location.ActionTypes.LOAD_SUCCESS:
      console.log('STORE:umber.location/LOCATION_LOADED');
      return {
        loaded: true,
        entities: action.payload
      };
    default:
      return state;
  }

};
