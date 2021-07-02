import { Game, Player } from "./Game"

describe('TicTacToe game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should not allow a player to play in any played position', () => {
    game.play(0, 0);
    game.play(1, 0);
    expect(() => game.play(0, 0)).toThrow();
  });

  it('should declare player X as winner if it plays three in top row', () => {
    game.play(0, 0);
    game.play(1, 0);
    game.play(0, 1);
    game.play(1, 1);
    game.play(0, 2);

    const winner = game.winner();

    expect(winner).toBe(Player.X);
  });

  it('should declare player O as winner if it plays three in top row', () => {
    game.play(1, 0);
    game.play(0, 0);
    game.play(1, 1);
    game.play(0, 1);
    game.play(2, 2);
    game.play(0, 2);

    const winner = game.winner();

    expect(winner).toBe(Player.O);
  });

  it('should declare player X as winner if it plays three in middle row', () => {
    game.play(1, 0);
    game.play(0, 0);
    game.play(1, 1);
    game.play(0, 1);
    game.play(1, 2);

    const winner = game.winner();

    expect(winner).toBe(Player.X);
  });

  it('should declare player O as winner if it plays three in middle row', () => {
    game.play(0, 0);
    game.play(1, 0);
    game.play(2, 1);
    game.play(1, 1);
    game.play(2, 2);
    game.play(1, 2);

    const winner = game.winner();

    expect(winner).toBe(Player.O);
  });

  it('should declare player X as winner if it plays three in bottom row', () => {
    game.play(2, 0);
    game.play(0, 0);
    game.play(2, 1);
    game.play(0, 1);
    game.play(2, 2);

    const winner = game.winner();

    expect(winner).toBe(Player.X);
  });

  it('should declare player O as winner if it plays three in bottom row', () => {
    game.play(0, 0);
    game.play(2, 0);
    game.play(1, 1);
    game.play(2, 1);
    game.play(0, 1);
    game.play(2, 2);

    const winner = game.winner();

    expect(winner).toBe(Player.O);
  });
});
