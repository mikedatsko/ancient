import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BoxService } from '../../services/box/box.service';

@Injectable()
export class BoxEffects {
  loadBoxes$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Boxes Page] Load Boxes'),
      mergeMap(() =>
        this.boxService.getAll().pipe(
          map((boxes) => ({
            type: '[Boxes API] Boxes Loaded Success',
            payload: boxes,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private boxService: BoxService) {}
}
