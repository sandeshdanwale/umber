import { Action } from '@ngrx/store';
import { Location } from '../models/aggregate/location.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Location] Load Success'),
  LOAD: type('[Location] Load'),
  COMMAND: type('[Location] Command')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Location[]) {

  }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Location[]) {

  }
}

export class CommandAction implements Action {
  type = ActionTypes.COMMAND;

  constructor(public payload: Location[]) {

  }
}

export type Actions = LoadSuccessAction | LoadAction | CommandAction;
