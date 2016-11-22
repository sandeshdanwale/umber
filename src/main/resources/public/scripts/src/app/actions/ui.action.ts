import { Action } from '@ngrx/store';
import { Ui } from '../models/aggregate/ui.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Ui] Load Success'),
  EVENT: type('[Ui] Event'),
  COMMAND: type('[Ui] Command'),
  UPDATE: type('[Ui] Update')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Ui[]) {

  }
}

export class EventAction implements Action {
  type = ActionTypes.EVENT;

  constructor(public payload: Ui[]) {

  }
}

export class CommandAction implements Action {
  type = ActionTypes.COMMAND;

  constructor(public payload: Ui[]) {

  }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Ui[]) {

  }
}

export type Actions = LoadSuccessAction | EventAction | CommandAction | UpdateAction;
