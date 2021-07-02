import { Tile } from "./Tile";

export enum Symbol {
  O = "O",
  X = "X",
  Empty = " ",
}

export class Board {
  private plays: Tile[] = [];

  constructor() {
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        const tile: Tile = new Tile(x, y, Symbol.Empty);
        this.plays.push(tile);
      }
    }
  }

  public TileAt(x: number, y: number): Tile {
    return this.plays.find((t: Tile) => t.x == x && t.y == y)!;
  }

  public AddTileAt(tile: Tile): void {
    const {x, y, symbol} = tile
    this.plays.find((t: Tile) => t.x == x && t.y == y)!.symbol = symbol;
  }
}
