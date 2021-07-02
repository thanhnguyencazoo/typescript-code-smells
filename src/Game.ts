import { Board, EmptyState } from "./Board";

export enum Player {
  O = "O",
  X = "X",
}

export class Game {
  private board: Board = new Board();
  private currentPlayer: Player = Player.X

  public play(x: number, y: number): void {
    this.checkTileIsEmpty(x, y);
    this.board.placeTile(this.currentPlayer, x, y);
    this.updateCurrentPlayer();
  }

  public winner(): Player | undefined {
    const isRowEmpty = (row: number) => {
      return (
        this.board.tileAt(row, 1)!.symbol === EmptyState.Empty &&
        this.board.tileAt(row, 1)!.symbol === EmptyState.Empty &&
        this.board.tileAt(row, 2)!.symbol === EmptyState.Empty
      );
    };

    const isRowFullWithSameSymbol = (row: number) => {
      return (
        this.board.tileAt(row, 0)!.symbol ===
        this.board.tileAt(row, 1)!.symbol &&
        this.board.tileAt(row, 2)!.symbol === this.board.tileAt(row, 1)!.symbol
      );
    };

    let winner

    const checkRowForWinner = (row: number) => {
      if (!isRowEmpty(row)) {
        if (isRowFullWithSameSymbol(row)) {
          winner = this.board.tileAt(row, 0).symbol;
        }
      }
    };

    checkRowForWinner(0);
    checkRowForWinner(1);
    checkRowForWinner(2);

    return winner
  }

  private checkTileIsEmpty(x: number, y: number) {
    if (this.board.tileAt(x, y).symbol !== EmptyState.Empty) {
      throw new Error("Invalid position");
    }
  }

  private updateCurrentPlayer() {
    this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X
  }
}
