import { Action } from '@ngrx/store';
import { Detail } from '../models/aggregate/detail.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Detail] Load Success'),
  LOAD: type('[Detail] Load'),
  COMMAND: type('[Detail] Command')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Detail[]) {

  }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Detail[]) {

  }
}

export class CommandAction implements Action {
  type = ActionTypes.COMMAND;

  constructor(public payload: Detail[]) {

  }
}

export type Actions = LoadSuccessAction | LoadAction | CommandAction;
