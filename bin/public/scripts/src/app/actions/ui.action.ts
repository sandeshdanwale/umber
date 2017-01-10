import { Action } from '@ngrx/store';
import { Panel, SearchDetailPanel } from '../models/aggregate/ui.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD_SUCCESS: type('[Ui] Load Success'),
  LOAD: type('[Ui] Load'),
  COMMAND: type('[Ui] Command'),
  PANEL: type('[UI] Panel'),
  UPDATE_SEARCH_DETAIL: type('[UI] Update Search Detail'),
  SHOW_SEARCH_DETAIL_LIST_LOADER: type('[UI] Show Search Detail List Loader')
};

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Array<Panel>) {

  }
}

export class UpdateSearchDetail implements Action {
  type = ActionTypes.UPDATE_SEARCH_DETAIL;

  constructor(public payload: SearchDetailPanel) {

  }
}

export class ShowSearchDetailListLoader implements Action {
  type = ActionTypes.SHOW_SEARCH_DETAIL_LIST_LOADER;

  constructor(public payload: boolean) {

  }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Array<Panel>) {

  }
}

export class PanelAction implements Action {
  type = ActionTypes.PANEL;

  constructor(public payload: Array<Panel>) {

  }
}

export type Actions = LoadSuccessAction | LoadAction | PanelAction | 
UpdateSearchDetail | ShowSearchDetailListLoader;
