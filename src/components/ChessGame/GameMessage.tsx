type GameMessageType = {
  message: string;
};

const GameMessage = ({ message }: GameMessageType) => {
  return (
    <div className="absolute flex justify-center items-center w-[450px] h-[450px] z-10 bg-gray-700 bg-opacity-70 rounded-lg">
      <div className="text-3xl bg-gray-400 w-full text-center py-2">
        {message}
      </div>
    </div>
  );
};

export default GameMessage;
