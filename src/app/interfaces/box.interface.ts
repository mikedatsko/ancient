export interface Box {
  id: string;
  name: string;
  description?: string;
}

export interface BoxState {
  list: Box[];
  selectedId?: string;
  box?: Box;
}
