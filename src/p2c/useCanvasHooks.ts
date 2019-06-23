import { useRef, useEffect, useReducer } from 'react';
import { drawCheckerboard } from './draw';
import reducer from './canvasReducer';
import { Action, Gobang } from './types';
import { DEFAULT_GAMEDATA } from './constants';

function useCanvasHooks(): [
  React.RefObject<HTMLCanvasElement>,
  Gobang,
  React.Dispatch<Action>
] {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [state, dispatch] = useReducer(reducer, {
    gameData: DEFAULT_GAMEDATA,
    self: true,
    gameOver: false
  });

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = 600;
      canvasRef.current.height = 600;
      drawCheckerboard(canvasRef.current);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { offsetX, offsetY } = e;
      console.log(offsetX, offsetY);
      if (canvasRef.current) {
        dispatch({
          type: 'KEY_DOWN',
          payload: { offsetX, offsetY, canvas: canvasRef.current }
        });
      }
    };
    if (canvasRef.current) {
      canvasRef.current.addEventListener('click', e => handleClick(e), false);
      return canvasRef.current.removeEventListener(
        'click',
        e => handleClick(e),
        false
      );
    }
  }, []);

  useEffect(() => {
    if (state.gameOver) {
      if (state.self) {
        alert('你赢了');
      } else {
        alert('你输了');
      }
    }
  }, [state.gameOver, state.self]);

  return [canvasRef, state, dispatch];
}

export default useCanvasHooks;
