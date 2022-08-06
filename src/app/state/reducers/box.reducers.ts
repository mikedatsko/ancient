import { ActionReducer, on, createReducer } from '@ngrx/store';
import * as BoxActions from '../actions/box.actions';
import { BoxState } from '../../interfaces/box.interface';

export const initialState: BoxState = {
  list: [],
  selectedId: undefined,
  box: undefined,
};

export const boxReducer = createReducer(
  initialState,
  on(BoxActions.getAll, (state: BoxState, action) => ({
    ...state,
    list: [...action.list],
  })),
  on(BoxActions.getBox, (state: BoxState, { selectedId, box }) => ({
    ...state,
    selectedId,
    box,
  })),
  on(BoxActions.reset, () => ({ ...initialState }))
);
