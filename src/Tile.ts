import { Player } from "./Game";
import { EmptyState } from "./Board";

export type TileState = EmptyState | Player

export class Tile {
  constructor(
    public x: number,
    public y: number,
    public symbol: TileState
  ) {
  }
}