import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoxState } from '../../interfaces/box.interface';

export const getBoxState = createFeatureSelector<BoxState>('boxState');

export const getBoxes = createSelector(
  getBoxState,
  (state: BoxState) => state.list
);

export const getBox = createSelector(
  getBoxState,
  (state: BoxState) => state.box
);
