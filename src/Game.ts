import { Board, Symbol } from "./Board";
import { Tile } from "./Tile";

export class Game {
  private lastSymbol: string = Symbol.Empty;
  private board: Board = new Board();

  public Play(symbol: Symbol, x: number, y: number): void {
    //if first move
    if (this.lastSymbol == Symbol.Empty) {
      //if player is X
      if (symbol == Symbol.O) {
        throw new Error("Invalid first player");
      }
    }
    //if not first move but player repeated
    else if (symbol == this.lastSymbol) {
      throw new Error("Invalid next player");
    }
    //if not first move but play on an already played tile
    else if (this.board.TileAt(x, y).symbol != Symbol.Empty) {
      throw new Error("Invalid position");
    }

    // update game state
    this.lastSymbol = symbol;
    const tile: Tile = {symbol, x, y}
    this.board.AddTileAt(tile);
  }

  public Winner(): string {
    //if the positions in first row are taken
    if (
      this.board.TileAt(0, 0)!.symbol != Symbol.Empty &&
      this.board.TileAt(0, 1)!.symbol != Symbol.Empty &&
      this.board.TileAt(0, 2)!.symbol != Symbol.Empty
    ) {
      //if first row is full with same symbol
      if (
        this.board.TileAt(0, 0)!.symbol == this.board.TileAt(0, 1)!.symbol &&
        this.board.TileAt(0, 2)!.symbol == this.board.TileAt(0, 1)!.symbol
      ) {
        return this.board.TileAt(0, 0)!.symbol;
      }
    }

    //if the positions in first row are taken
    if (
      this.board.TileAt(1, 0)!.symbol != Symbol.Empty &&
      this.board.TileAt(1, 1)!.symbol != Symbol.Empty &&
      this.board.TileAt(1, 2)!.symbol != Symbol.Empty
    ) {
      //if middle row is full with same symbol
      if (
        this.board.TileAt(1, 0)!.symbol == this.board.TileAt(1, 1)!.symbol &&
        this.board.TileAt(1, 2)!.symbol == this.board.TileAt(1, 1)!.symbol
      ) {
        return this.board.TileAt(1, 0)!.symbol;
      }
    }

    //if the positions in first row are taken
    if (
      this.board.TileAt(2, 0)!.symbol != Symbol.Empty &&
      this.board.TileAt(2, 1)!.symbol != Symbol.Empty &&
      this.board.TileAt(2, 2)!.symbol != Symbol.Empty
    ) {
      //if middle row is full with same symbol
      if (
        this.board.TileAt(2, 0)!.symbol == this.board.TileAt(2, 1)!.symbol &&
        this.board.TileAt(2, 2)!.symbol == this.board.TileAt(2, 1)!.symbol
      ) {
        return this.board.TileAt(2, 0)!.symbol;
      }
    }

    return Symbol.Empty;
  }
}
