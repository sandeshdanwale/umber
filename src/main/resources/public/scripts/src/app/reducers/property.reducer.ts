import { Property } from '../models/aggregate/property.model';
import * as property from '../actions/property.action';
import { Observable } from 'rxjs';

export interface State {
  loaded: boolean;
  entities: Property[];
};

const initialState: State = {
  loaded: false,
  entities: null
};

export function reducer(state = initialState, action: property.Actions): State {
  switch (action.type) {
    case property.ActionTypes.LOAD_SUCCESS:
      console.log('STORE:umber.property/PROPERTY_LOADED');
      return {
        loaded: true,
        entities: action.payload
      };
    default:
      return state;
  }

}

export function getPropertyEntities(state$: Observable<State>) {
  return state$.select(state => state.entities);
}
