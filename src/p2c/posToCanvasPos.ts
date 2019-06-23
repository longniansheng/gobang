export default function posToCanvasPos(
  offsetX: number,
  offsetY: number
): [number, number] {
  const posX = Math.round((offsetX - 15) / 30) * 30 + 15;
  const posY = Math.round((offsetY - 15) / 30) * 30 + 15;
  return [posX, posY];
}
