import produce from 'immer';
import checkGameOver from './checkGameOver';

const canvasReducer = produce((draft, action) => {
  switch (action.key) {
    case 'CHECK_OVER':
      checkGameOver();
      return;

    default:
      return;
  }
});

export default canvasReducer;
