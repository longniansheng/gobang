import posToCanvasPos from './posToCanvasPos';

function drawCheckerboard(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d');
  if (context) {
    for (let i = 0; i < 20; i++) {
      context.strokeStyle = '#D6D1D1';
      context.moveTo(15 + i * 30, 15);
      context.lineTo(15 + i * 30, 585);
      context.stroke();
      context.moveTo(15, 15 + i * 30);
      context.lineTo(585, 15 + i * 30);
      context.stroke();
    }
  }
}

function drawPiece(
  canvas: HTMLCanvasElement,
  offsetX: number,
  offsetY: number,
  self: boolean = true
) {
  const context = canvas.getContext('2d');
  if (context) {
    context.beginPath();
    const [posX, posY] = posToCanvasPos(offsetX, offsetY);

    context.arc(posX, posY, 13, 0, 2 * Math.PI);
    const g = context.createRadialGradient(posX, posY, 13, posX, posY, 0);
    if (self) {
      g.addColorStop(0, '#0A0A0A');
      g.addColorStop(1, '#636766');
    } else {
      g.addColorStop(0, '#D1D1D1');
      g.addColorStop(1, '#F9F9F9');
    }
    context.fill();
    context.closePath();
  }
}

export { drawCheckerboard, drawPiece };
