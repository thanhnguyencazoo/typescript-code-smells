import { Board, Symbol } from "./Board";
import { Tile } from "./Tile";

export class Game {
  private lastPlayer: Symbol = Symbol.Empty;
  private board: Board = new Board();

  public play(symbol: Symbol, x: number, y: number): void {
    //if first move
    if (this.lastPlayer == Symbol.Empty) {
      //if player is X
      if (symbol == Symbol.O) {
        throw new Error("Invalid first player");
      }
    }
    //if not first move but player repeated
    else if (symbol == this.lastPlayer) {
      throw new Error("Invalid next player");
    }
    //if not first move but play on an already played tile
    else if (this.board.tileAt(x, y).symbol != Symbol.Empty) {
      throw new Error("Invalid position");
    }

    const tile: Tile = { symbol, x, y }
    this.updateGameState(tile);
  }

  private updateGameState(tile: Tile) {
    this.board.addTileAt(tile);
    this.lastPlayer = tile.symbol;
  }

  public winner(): string {
    //if the positions in first row are taken
    if (
      this.board.tileAt(0, 0)!.symbol != Symbol.Empty &&
      this.board.tileAt(0, 1)!.symbol != Symbol.Empty &&
      this.board.tileAt(0, 2)!.symbol != Symbol.Empty
    ) {
      //if first row is full with same symbol
      if (
        this.board.tileAt(0, 0)!.symbol == this.board.tileAt(0, 1)!.symbol &&
        this.board.tileAt(0, 2)!.symbol == this.board.tileAt(0, 1)!.symbol
      ) {
        return this.board.tileAt(0, 0)!.symbol;
      }
    }

    //if the positions in first row are taken
    if (
      this.board.tileAt(1, 0)!.symbol != Symbol.Empty &&
      this.board.tileAt(1, 1)!.symbol != Symbol.Empty &&
      this.board.tileAt(1, 2)!.symbol != Symbol.Empty
    ) {
      //if middle row is full with same symbol
      if (
        this.board.tileAt(1, 0)!.symbol == this.board.tileAt(1, 1)!.symbol &&
        this.board.tileAt(1, 2)!.symbol == this.board.tileAt(1, 1)!.symbol
      ) {
        return this.board.tileAt(1, 0)!.symbol;
      }
    }

    //if the positions in first row are taken
    if (
      this.board.tileAt(2, 0)!.symbol != Symbol.Empty &&
      this.board.tileAt(2, 1)!.symbol != Symbol.Empty &&
      this.board.tileAt(2, 2)!.symbol != Symbol.Empty
    ) {
      //if middle row is full with same symbol
      if (
        this.board.tileAt(2, 0)!.symbol == this.board.tileAt(2, 1)!.symbol &&
        this.board.tileAt(2, 2)!.symbol == this.board.tileAt(2, 1)!.symbol
      ) {
        return this.board.tileAt(2, 0)!.symbol;
      }
    }

    return Symbol.Empty;
  }
}
