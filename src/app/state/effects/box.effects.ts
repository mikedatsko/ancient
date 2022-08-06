import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BoxService } from '../../services/box/box.service';
import * as BoxActions from '../actions/box.actions';

@Injectable()
export class BoxEffects {
  loadBoxes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoxActions.requestAll),
      mergeMap(() =>
        this.boxService.getAll().pipe(
          map((response: any) =>
            BoxActions.getAll({
              list: response.data.rates.map((rate: any) => ({
                id: rate.currency,
                name: rate.rate,
              })),
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadBox$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoxActions.requestBox),
      mergeMap((action) =>
        this.boxService.getBox(action.id).pipe(
          map((response: any) =>
            BoxActions.getBox({
              box: {
                id: response.data.findRate.id,
                name: response.data.findRate.name,
                description: response.data.findRate.min_size,
              },
              selectedId: action.id,
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private boxService: BoxService) {}
}
