import { Action } from '@ngrx/store';
import { Detail } from '../models/aggregate/detail.model';
import { type } from '../../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Detail] Load Success'),
  EVENT: type('[Detail] Event'),
  COMMAND: type('[Detail] Command'),
  UPDATE: type('[Detail] Update')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Detail[]) {

  }
}

export class EventAction implements Action {
  type = ActionTypes.EVENT;

  constructor(public payload: Detail[]) {

  }
}

export class CommandAction implements Action {
  type = ActionTypes.COMMAND;

  constructor(public payload: Detail[]) {

  }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Detail[]) {

  }
}

export type Actions = LoadSuccessAction | EventAction | CommandAction | UpdateAction;
