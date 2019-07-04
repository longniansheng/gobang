export interface Gobang {
  gameData: number[][];
  self: boolean;
  gameOver: boolean;
}

export interface Action {
  type: string;
  // tslint:disable-next-line:no-any
  payload?: any;
}
