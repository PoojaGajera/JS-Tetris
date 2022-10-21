import Menu from "./Menu";
import { useGameOver } from "../hooks/useGameOver.js";
import Tetris from "./Tetris";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const start = () => resetGameOver();
  // console.log(`start gameover is ${gameOver}`);

  return (
    <div className='Game'>
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default Game;
