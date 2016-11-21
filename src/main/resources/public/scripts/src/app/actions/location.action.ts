import { Action } from '@ngrx/store';
import { Location } from '../models/aggregate/location.model';
import { type } from '../../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Location] Load Success'),
  EVENT: type('[Location] Event'),
  COMMAND: type('[Location] Command'),
  UPDATE: type('[Location] Update')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Location[]) {

  }
}

export class EventAction implements Action {
  type = ActionTypes.EVENT;

  constructor(public payload: Location[]) {

  }
}

export class CommandAction implements Action {
  type = ActionTypes.COMMAND;

  constructor(public payload: Location[]) {

  }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Location[]) {

  }
}

export type Actions = LoadSuccessAction | EventAction | CommandAction | UpdateAction;
