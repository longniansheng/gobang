import { useRef, useEffect, useReducer } from 'react';
import { drawCheckerboard, drawPiece } from './draw';
import reducer from './canvasReducer';

function useCanvasHooks(): [React.RefObject<HTMLCanvasElement>] {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [] = useReducer(reducer, {});

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
        drawPiece(canvasRef.current, offsetX, offsetY);
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

  return [canvasRef];
}

export default useCanvasHooks;
