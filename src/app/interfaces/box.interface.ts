export interface Box {
  id?: string;
}

export interface BoxState {
  list: Box[];
  selectedId?: string;
  one?: Box;
}
