import { Action } from '@ngrx/store';
import { Property } from '../models/aggregate/property.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[DefaultProperty] Load Success'),
  LOAD: type('[DefaultProperty] Load'),
  UPDATE_PROPERTY_DETAIL: type('[DefaultProperty] Update Property Detail')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Property[]) {

  }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Property[]) {

  }
}

export class UpdatePropertyDetail implements Action {
  type = ActionTypes.UPDATE_PROPERTY_DETAIL;

  constructor(public payload: Property) {

  }
}

export type Actions = LoadSuccessAction | LoadAction | UpdatePropertyDetail;
