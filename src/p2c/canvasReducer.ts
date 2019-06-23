import produce from 'immer';
import { Gobang, Action } from './types';
import { handleKeydown } from './canvasActions';

const canvasReducer = (state: Gobang, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      // case 'CHECK_OVER':
      //   return checkGameOver(draft, action);
      case 'KEY_DOWN':
        return handleKeydown(draft, action);
      default:
        return state;
    }
  });

export default canvasReducer;
