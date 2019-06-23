export interface Gobang {
  gameData: number[][];
  self: boolean;
  gameOver: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}
