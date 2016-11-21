import { Action } from '@ngrx/store';
import { Developer } from '../models/aggregate/developer.model';
import { type } from '../../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Developer] Load Success'),
  EVENT: type('[Developer] Event'),
  COMMAND: type('[Developer] Command'),
  UPDATE: type('[Developer] Update')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Developer[]) {

  }
}

export class EventAction implements Action {
  type = ActionTypes.EVENT;

  constructor(public payload: Developer[]) {

  }
}

export class CommandAction implements Action {
  type = ActionTypes.COMMAND;

  constructor(public payload: Developer[]) {

  }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Developer[]) {

  }
}

export type Actions = LoadSuccessAction | EventAction | CommandAction | UpdateAction;
