const DEFAULT_GAMEDATA = Array.from({ length: 20 }).map(() => {
  const temp = Array.from({ length: 20 }).map(() => 0);
  return [...temp];
});

export { DEFAULT_GAMEDATA };
