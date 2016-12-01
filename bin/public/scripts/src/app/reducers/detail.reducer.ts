import { Detail } from '../models/aggregate/detail.model';
import * as detail from '../actions/detail.action';
import { Observable } from 'rxjs';

export interface State {
  loaded: boolean;
  entities: Detail[];
};

const initialState: State = {
  loaded: false,
  entities: null
};

export function reducer(state = initialState, action: detail.Actions): State {
  switch (action.type) {
    case detail.ActionTypes.LOAD_SUCCESS:
      console.log('STORE:umber.detail/DETAIL_LOADED');
      return {
        loaded: true,
        entities: action.payload
      };
    default:
      return state;
  }

};