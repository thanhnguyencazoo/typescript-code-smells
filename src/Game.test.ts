import { Game } from "./Game"
import { Symbol } from "./Board"

describe('TicTacToe game', () => {
    let game : Game;

    beforeEach(() => {
        game = new Game();
    });

    it('should not allow player O to play first', () => {
        expect(() => game.play(Symbol.O, 0, 0)).toThrow();
    });

    it('should not allow player x to play twice in a row', () =>{
        game.play(Symbol.X, 0, 0);
        expect(() => game.play(Symbol.X, 1, 0)).toThrow();
    });
    
    it('should not allow a player to play in last played position', () => {
        game.play(Symbol.X, 0, 0);
        expect(() => game.play(Symbol.O, 0, 0)).toThrow();
    });
    
    it('should not allow a player to play in any played position', () => {
        game.play(Symbol.X, 0, 0);
        game.play(Symbol.O, 1, 0);
        expect(() => game.play(Symbol.X, 0, 0)).toThrow();
    });
    
    it('should declare player X as winner if it plays three in top row', () =>{
        game.play(Symbol.X, 0, 0);
        game.play(Symbol.O, 1, 0);
        game.play(Symbol.X, 0, 1);
        game.play(Symbol.O, 1, 1);
        game.play(Symbol.X, 0, 2);
        
        const winner = game.winner();
        
        expect(winner).toBe(Symbol.X);
    });
    
    it('should declare player O as winner if it plays three in top row', () => {
        game.play(Symbol.X, 1, 0);
        game.play(Symbol.O, 0, 0);
        game.play(Symbol.X, 1, 1);
        game.play(Symbol.O, 0, 1);
        game.play(Symbol.X, 2, 2);
        game.play(Symbol.O, 0, 2);

        const winner = game.winner();

        expect(winner).toBe(Symbol.O);
    });
    
    it('should declare player X as winner if it plays three in middle row', () => {
        game.play(Symbol.X, 1, 0);
        game.play(Symbol.O, 0, 0);
        game.play(Symbol.X, 1, 1);
        game.play(Symbol.O, 0, 1);
        game.play(Symbol.X, 1, 2);
       
        const winner = game.winner();
        
        expect(winner).toBe(Symbol.X);
    });
    
    it('should declare player O as winner if it plays three in middle row', () => {
        game.play(Symbol.X, 0, 0);
        game.play(Symbol.O, 1, 0);
        game.play(Symbol.X, 2, 1);
        game.play(Symbol.O, 1, 1);
        game.play(Symbol.X, 2, 2);
        game.play(Symbol.O, 1, 2);
        
        const winner = game.winner();
        
        expect(winner).toBe(Symbol.O);
    });
    
    it('should declare player X as winner if it plays three in bottom row', () => {
        game.play(Symbol.X, 2, 0);
        game.play(Symbol.O, 0, 0);
        game.play(Symbol.X, 2, 1);
        game.play(Symbol.O, 0, 1);
        game.play(Symbol.X, 2, 2);
        
        const winner = game.winner();
        
        expect(winner).toBe(Symbol.X);
    });
    
    it('should declare player O as winner if it plays three in bottom row', () => {
        game.play(Symbol.X, 0, 0);
        game.play(Symbol.O, 2, 0);
        game.play(Symbol.X, 1, 1);
        game.play(Symbol.O, 2, 1);
        game.play(Symbol.X, 0, 1);
        game.play(Symbol.O, 2, 2);
        
        const winner = game.winner();
        
        expect(winner).toBe(Symbol.O);
    });
});
