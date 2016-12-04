import { Action } from '@ngrx/store';
import { Developer } from '../models/aggregate/developer.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Developer] Load Success'),
  LOAD: type('[Developer] Load'),
  COMMAND: type('[Developer] Command')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Developer[]) {

  }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Developer[]) {

  }
}

export class CommandAction implements Action {
  type = ActionTypes.COMMAND;

  constructor(public payload: Developer[]) {

  }
}

export type Actions = LoadSuccessAction | LoadAction | CommandAction;
