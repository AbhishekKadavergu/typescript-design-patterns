type Direction = "UP" | "DOWN";

export function move(dir: Direction) {
  switch (dir) {
    case "UP":
      return 1;
    case "DOWN":
      return -1;
    default:
      // If you add "LEFT" to Direction later, TS will error here!
      const _exhaustiveCheck: never = dir;
      return _exhaustiveCheck;
  }
}
