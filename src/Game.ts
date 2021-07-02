import { Board, Symbol } from "./Board";
import { Tile } from "./Tile";

export class Game {
  private lastPlayer: Symbol = Symbol.Empty;
  private board: Board = new Board();

  public play(symbol: Symbol, x: number, y: number): void {
    //if first move
    if (this.lastPlayer === Symbol.Empty) {
      //if player is X
      if (symbol === Symbol.O) {
        throw new Error("Invalid first player");
      }
    }
    //if not first move but player repeated
    else if (symbol === this.lastPlayer) {
      throw new Error("Invalid next player");
    }
    //if not first move but play on an already played tile
    else if (this.board.tileAt(x, y).symbol != Symbol.Empty) {
      throw new Error("Invalid position");
    }

    const tile: Tile = { symbol, x, y };
    this.board.placeTile(tile);
    this.updateLastPlayer(symbol);
  }

  private updateLastPlayer(symbol: Symbol) {
    this.lastPlayer = symbol;
  }

  public winner(): string {
    const isRowTaken = (row: number) => {
      return (
        this.board.tileAt(row, 1)!.symbol !== Symbol.Empty &&
        this.board.tileAt(row, 1)!.symbol !== Symbol.Empty &&
        this.board.tileAt(row, 2)!.symbol !== Symbol.Empty
      );
    };

    const isRowFullWithSameSymbol = (row: number) => {
      return (
        this.board.tileAt(row, 0)!.symbol ===
          this.board.tileAt(row, 1)!.symbol &&
        this.board.tileAt(row, 2)!.symbol === this.board.tileAt(row, 1)!.symbol
      );
    };
    if (isRowTaken(0)) {
      if (isRowFullWithSameSymbol(0)) {
        return this.board.tileAt(0, 0)!.symbol;
      }
    }

    if (isRowTaken(1)) {
      if (isRowFullWithSameSymbol(1)) {
        return this.board.tileAt(1, 0)!.symbol;
      }
    }

    if (isRowTaken(2)) {
      if (isRowFullWithSameSymbol(2)) {
        return this.board.tileAt(2, 0)!.symbol;
      }
    }

    return Symbol.Empty;
  }
}
