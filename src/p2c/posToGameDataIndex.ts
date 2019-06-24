export default function posToGameDataIndex(offsetX: number, offsetY: number) {
  const posX = Math.round((offsetY - 15) / 30);
  const posY = Math.round((offsetX - 15) / 30);
  return [posX, posY];
}
