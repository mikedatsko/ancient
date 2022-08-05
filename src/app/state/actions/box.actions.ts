import { Action } from '@ngrx/store';
import { Box } from '../../interfaces/box.interface';

export enum ActionTypes {
  GET_ALL = '[Box] Get All',
  GET_ONE = '[Box] Get One',
  RESET = '[Box] Reset',
}

export class GetAll implements Action {
  readonly type = ActionTypes.GET_ALL;

  constructor(public payload: { list: Box[] }) {}
}

export class GetOne implements Action {
  readonly type = ActionTypes.GET_ONE;

  constructor(public payload: { one: Box; selectedId: string }) {}
}

export class Reset implements Action {
  readonly type = ActionTypes.RESET;
}

export type ActionsUnion = GetAll | GetOne | Reset;
