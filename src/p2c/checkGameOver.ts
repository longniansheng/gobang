/**
 * 判断游戏是否结束
 *
 *  游戏结束的规则： 当前落子的横向、竖向、斜线方向是否有五颗连成线的子
 *
 * @param gameData 当前的游戏数据
 * @param posX 当前落子的横坐标
 * @param posY 当前落子的纵坐标
 */
export default function checkGameOver(
  gameData: number[][],
  posX: number,
  posY: number
) {
  // 分方向判断是否游戏结束

  const Hdir = [Math.max(0, posX - 4), Math.min(19, posX + 4)];
  const Vdir = [Math.max(0, posY - 4), Math.max(19, posY + 4)];
}
