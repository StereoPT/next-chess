import { PieceColor, PieceType, Square } from 'chess.js';

type BoardType = {
  type: PieceType;
  color: PieceColor;
  square: Square;
} | null;

export const evaluateBoard = (board: BoardType[][]) => {
  let totalEval = 0;

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      totalEval += getPieceValue(board[x][y]);
    }
  }

  return totalEval;
};

const getPieceValue = (piece: BoardType) => {
  if (piece === null) return 0;

  const getAbsoluteValue = function (piece: PieceType) {
    switch (piece) {
      case 'p':
        return 10;
      case 'n':
        return 30;
      case 'b':
        return 30;
      case 'r':
        return 50;
      case 'q':
        return 90;
      case 'k':
        return 900;
      default:
        throw 'Unknown piece type: ' + piece;
    }
  };

  const absoluteValue = getAbsoluteValue(piece.type);
  return piece.color === 'w' ? absoluteValue : -absoluteValue;
};
