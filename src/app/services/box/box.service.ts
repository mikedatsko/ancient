import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_BOXES, GET_BOX } from '../../queries/box.queries';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  constructor(private apollo: Apollo) {}

  getAll() {
    return this.apollo.watchQuery({
      query: GET_BOXES,
    }).valueChanges;
  }

  getBox(currency: string) {
    return this.apollo.watchQuery({
      query: GET_BOX,
      variables: {
        currency: currency,
      },
    }).valueChanges;
  }
}
