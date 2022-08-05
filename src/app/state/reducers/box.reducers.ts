import { ActionReducer } from '@ngrx/store';
import * as BoxActions from '../actions/box.actions';
import { BoxState } from '../../interfaces/box.interface';

export const initialState: BoxState = {
  list: [],
  selectedId: undefined,
  one: undefined,
};

export function boxReducer(
  state: BoxState,
  action: ActionsUnion
): ActionReducer<BoxState, ActionsUnion> {
  switch (action.type) {
    case BoxActions.ActionTypes.GET_ALL: {
      return {
        ...state,
        list: [...action.payload.list],
      };
    }

    case BoxActions.ActionTypes.GET_ONE: {
      return {
        ...state,
        selectedId: action.payload.selectedId,
        one: action.payload.one,
      };
    }

    case BoxActions.ActionTypes.RESET: {
      return { ...initialState };
    }

    default: {
      return state;
    }
  }
}
