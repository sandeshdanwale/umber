import { Action } from '@ngrx/store';
import { Landmark } from '../models/aggregate/landmark.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Landmark] Load Success'),
  LOAD: type('[Landmark] Load'),
  COMMAND: type('[Landmark] Command'),
  UPDATE_LANDAMRK_DETAIL: type('[Landmark] Update Landmark Detail')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Landmark[]) {

  }
}

export class UpdateLandmarkDetail implements Action {
  type = ActionTypes.UPDATE_LANDAMRK_DETAIL;

  constructor(public payload: Landmark) {

  }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Landmark[]) {

  }
}

export class CommandAction implements Action {
  type = ActionTypes.COMMAND;

  constructor(public payload: Landmark[]) {

  }
}

export type Actions = LoadSuccessAction | LoadAction | CommandAction | UpdateLandmarkDetail;
