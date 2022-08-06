import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Box } from '../../interfaces/box.interface';
import * as boxSelectors from '../../state/selectors/box.selectors';
import * as boxActions from '../../state/actions/box.actions';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss'],
})
export class BoxListComponent implements OnInit {
  boxes$: Observable<Box[]> = this.store.select(boxSelectors.getBoxes);
  isLoading: boolean = true;

  constructor(private readonly store: Store) {
    this.boxes$
      .pipe(tap((list) => (this.isLoading = !list.length)))
      .subscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(boxActions.requestAll());
  }
}
