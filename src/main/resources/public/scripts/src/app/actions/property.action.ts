import { Action } from '@ngrx/store';
import { Property } from '../models/aggregate/property.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Property] Load Success'),
  EVENT: type('[Property] Event'),
  COMMAND: type('[Property] Command'),
  UPDATE: type('[Property] Update')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Property[]) {

  }
}

export class EventAction implements Action {
  type = ActionTypes.EVENT;

  constructor(public payload: Property[]) {

  }
}

export class CommandAction implements Action {
  type = ActionTypes.COMMAND;

  constructor(public payload: Property[]) {

  }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Property[]) {

  }
}

export type Actions = LoadSuccessAction | EventAction | CommandAction | UpdateAction;
