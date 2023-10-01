import { Button } from '../ui/button';

type ControlsType = {
  startGame: () => void;
  resetGame: () => void;
};

const Controls = ({ startGame, resetGame }: ControlsType) => {
  return (
    <div className="flex gap-4 mt-4">
      <Button onClick={() => startGame()}>Start Game</Button>
      <Button onClick={() => resetGame()}>Reset Game</Button>
    </div>
  );
};

export default Controls;
