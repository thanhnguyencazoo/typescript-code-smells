import { Tile } from "./Tile";
import { Player } from "./Game";

export enum EmptyState {
  Empty = " ",
}

export class Board {
  private tiles: Tile[] = [];

  constructor() {
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        const tile: Tile = new Tile(x, y, EmptyState.Empty);
        this.tiles.push(tile);
      }
    }
  }

  public tileAt(x: number, y: number): Tile {
    return this.tiles.find((t: Tile) => t.x == x && t.y == y)!;
  }

  public placeTile(player: Player, x: number, y: number): void {
    const foundTile = this.tileAt(x, y);
    foundTile.symbol = player;
  }
}
