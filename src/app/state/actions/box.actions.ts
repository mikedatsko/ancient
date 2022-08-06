import { createAction, props } from '@ngrx/store';
import { Box } from '../../interfaces/box.interface';

export const requestAll = createAction('[Box] Request All');
export const getAll = createAction('[Box] Get All', props<{ list: Box[] }>());
export const requestBox = createAction(
  '[Box] Request One',
  props<{ id: string }>()
);
export const getBox = createAction(
  '[Box] Get One',
  props<{ box: Box; selectedId: string }>()
);
export const reset = createAction('[Box] Reset');
