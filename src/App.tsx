import React from 'react';
import useCanvasHooks from './p2c/useCanvasHooks';

function App() {
  const [canvasRef] = useCanvasHooks();

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        margin: '50px auto',
        boxShadow: ' -2px -2px 2px #F3F2F2, 5px 5px 5px #6F6767'
      }}
    />
  );
}

export default App;
