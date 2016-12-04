import { Action } from '@ngrx/store';
import { Panel} from '../models/aggregate/ui.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Ui] Load Success'),
  LOAD: type('[Ui] Load'),
  COMMAND: type('[Ui] Command'),
  PANEL: type('[UI] Panel')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Array<Panel>) {

  }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Array<Panel>) {

  }
}

export class CommandAction implements Action {
  type = ActionTypes.COMMAND;

  constructor(public payload: Array<Panel>) {

  }
}

export class PanelAction implements Action {
  type = ActionTypes.PANEL;

  constructor(public payload: Array<Panel>) {

  }
}

export type Actions = LoadSuccessAction | LoadAction | CommandAction | PanelAction;
