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
  posY: number,
  self: boolean
) {
  // 分方向判断是否游戏结束

  const Hdir: [number, number] = [
    Math.max(0, posY - 4),
    Math.min(19, posY + 4)
  ];
  const Vdir: [number, number] = [
    Math.max(0, posX - 4),
    Math.max(19, posX + 4)
  ];

  const Hdata = gameData[posX].slice(Hdir[0], Hdir[1]);
  const Vdata = gameData.map(item => item[posY]).slice(Vdir[0], Vdir[1]);

  const Odata = genObliqueLineData(gameData, posX, posY);
  const Bdata = genBackslashesData(gameData, posX, posY);
  if (
    checkGameData(Hdata, self) ||
    checkGameData(Vdata, self) ||
    checkGameData(Odata, self) ||
    checkGameData(Bdata, self)
  ) {
    return true;
  }
  return false;
}

/**
 * 数据校验
 * @param data
 * @param range
 * @param self
 */
function checkGameData(data: number[], self: boolean) {
  const sum = data.reduce((total, cur) => {
    if ((cur === 1 && self) || (!self && cur === 2) || total >= 5) {
      return total + 1;
    } else {
      return 0;
    }
  }, 0);
  return sum >= 5;
}

/**
 * 获取斜线方向上的数据
 * @param gameData
 * @param posX
 * @param posY
 */
function genObliqueLineData(
  gameData: number[][],
  posX: number,
  posY: number
): number[] {
  const result = [];
  const endX = Math.min(posX + 4, 19);
  const endY = Math.min(posY + 4, 19);
  for (let i = posX - 4, j = posY - 4; i <= endX && j <= endY; i++, j++) {
    if (i >= 0 && j >= 0) {
      result.push(gameData[i][j]);
    }
  }

  return result;
}

/**
 * 获取反斜线上的数据
 * @param gameData
 * @param posX
 * @param posY
 */
function genBackslashesData(
  gameData: number[][],
  posX: number,
  posY: number
): number[] {
  const result = [];
  const endX = Math.min(posX + 4, 19);
  const endY = Math.max(posY - 4, 0);
  for (let i = posX - 4, j = posY + 4; i <= endX && j >= endY; i++, j--) {
    if (i >= 0 && j <= 19) {
      result.push(gameData[i][j]);
    }
  }
  return result;
}
