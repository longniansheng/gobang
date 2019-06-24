import { Gobang, Action } from './types';
import posToGameDataIndex from './posToGameDataIndex';
import { drawPiece } from './draw';
import checkGameOver from './checkGameOver';

function handleKeydown(draft: Gobang, action: Action) {
  if (draft.gameOver) {
    return draft;
  }
  const { self, gameData } = draft;
  const { offsetX, offsetY, canvas } = action.payload;

  const [posX, posY] = posToGameDataIndex(offsetX, offsetY);
  if (gameData[posX][posY]) {
    return draft;
  }
  drawPiece(canvas, offsetX, offsetY, self);
  draft.gameData[posX][posY] = self ? 1 : 2;
  const gameOver = checkGameOver(draft.gameData, posX, posY, self);
  draft.self = gameOver ? draft.self : !draft.self;
  draft.gameOver = gameOver;
  return draft;
}

export { handleKeydown };
