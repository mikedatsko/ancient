import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Box } from '../../interfaces/box.interface';
import * as boxSelectors from '../../state/selectors/box.selectors';
import * as boxActions from '../../state/actions/box.actions';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  box$: Observable<Box | undefined> = this.store.select(boxSelectors.getBox);
  isLoading: boolean = true;
  id: string = '';

  constructor(private route: ActivatedRoute, private readonly store: Store) {
    this.box$.pipe(tap((box) => (this.isLoading = !box))).subscribe();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.id = id;
    this.store.dispatch(boxActions.requestBox({ id }));
  }
}
