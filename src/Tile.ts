import { Symbol } from './Board'

export class Tile {
  constructor(
    public x: number,
    public y: number,
    public symbol: Symbol
  ) {
  }
}