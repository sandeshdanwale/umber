import { Landmark } from '../models/aggregate/landmark.model';
import * as landmark from '../actions/landmark.action';
import { Observable } from 'rxjs';

export interface State {
  loaded: boolean;
  entities: Landmark[];
};

const initialState: State = {
  loaded: false,
  entities: null
};

export function reducer(state = initialState, action: landmark.Actions): State {
  switch (action.type) {
    case landmark.ActionTypes.LOAD_SUCCESS:
      console.log('STORE:umber.landmark/LANDMARK_LOADED');
      return {
        loaded: true,
        entities: action.payload
      };
    default:
      return state;
  }

}

export function getLandmarkEntities(state$: Observable<State>) {
  return state$.select(state => state.entities);
}
