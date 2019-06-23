import { Gobang, Action } from './types';
import posToGameDataIndex from './posToGameDataIndex';
import { drawPiece } from './draw';

function handleKeydown(draft: Gobang, action: Action) {
  const { self, gameData } = draft;
  const { offsetX, offsetY, canvas } = action.payload;

  const [posX, posY] = posToGameDataIndex(offsetX, offsetY);
  if (gameData[posX][posY]) {
    return draft;
  }
  drawPiece(canvas, offsetX, offsetY, self);
  draft.gameData[posX][posY] = self ? 1 : 2;
  draft.self = !draft.self;
  return draft;
}

export { handleKeydown };
