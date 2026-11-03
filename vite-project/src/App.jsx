import { useState } from 'react';
import Player from './Components/Player.jsx';
import GameBoard from './Components/Gameboard.jsx'; 
import Log from './Components/Log.jsx';

const symbols = Array.from({ length: 200 }, (_, i) =>
  (i * 7) % 3 === 0 ? 'O' : 'X'
);

// State should live in the closest common parent of every component that needs it.
// In this app, activePlayer is shared by Player (to highlight) and GameBoard (to place the symbol),
// so it lives in App. The parent passes the value down as props and passes a handler function
// down so the child can tell the parent that something happened. This keeps a single source
// of truth, keeps siblings in sync, and makes the components easier to reuse and extend.
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelector(rowIndex, colIndex) {
    // currentPlayer is the previous active player; the ternary flips X to O and O to X
    setActivePlayer((currentPlayer) => (currentPlayer === 'X' ? 'O' : 'X'));

    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    }); // closes setGameTurns
  } // closes handleSelector

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-900 to-slate-800 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid select-none grid-cols-[repeat(auto-fill,minmax(4.5rem,1fr))] content-start gap-4 p-4 text-center text-5xl font-bold"
      >
        {symbols.map((symbol, i) => (
          <span
            key={i}
            className={`${
              symbol === 'X' ? 'text-amber-400/10' : 'text-sky-400/10'
            } ${i % 5 === 0 ? 'rotate-12' : i % 4 === 0 ? '-rotate-12' : ''}`}
          >
            {symbol}
          </span>
        ))}
      </div>

      <div className="relative z-10">
        <h1 className="py-8 text-center text-4xl font-bold tracking-widest text-amber-400">
          Tic-Tac-Toe
        </h1>

        <main>
          <div
            id="game-board"
            className="mx-auto max-w-2xl rounded-xl bg-slate-700/80 p-6 shadow-xl backdrop-blur-sm"
          >
            <ol id="players" className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
              <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
            </ol>

            <GameBoard onSelectSquare={handleSelector} turns={gameTurns} />
          </div>
        </main>

        <Log turns={gameTurns} />
      </div>
    </div>
  );
}

export default App;