import { ChessInstance } from 'chess.js';
import { evaluateBoard } from './chess';

export const minimax = (
  depth: number,
  game: ChessInstance,
  alpha: number,
  beta: number,
  isMaximizingPlayer: boolean
) => {
  if (depth <= 0) return -evaluateBoard(game.board());

  const possibleMoves = game.moves();

  if (isMaximizingPlayer) {
    let bestValue = -9999;
    for (const move of possibleMoves) {
      game.move(move);
      bestValue = Math.max(
        bestValue,
        minimax(depth - 1, game, alpha, beta, !isMaximizingPlayer)
      );
      game.undo();

      alpha = Math.max(alpha, bestValue);
      if (beta <= alpha) return bestValue;
    }
    return bestValue;
  } else {
    let bestValue = 9999;
    for (const move of possibleMoves) {
      game.move(move);
      bestValue = Math.min(
        bestValue,
        minimax(depth - 1, game, alpha, beta, !isMaximizingPlayer)
      );
      game.undo();

      beta = Math.min(beta, bestValue);
      if (beta <= alpha) return bestValue;
    }
    return bestValue;
  }
};
