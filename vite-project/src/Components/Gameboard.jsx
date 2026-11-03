export default function GameBoard({ board, onSelectSquare, disabled }) {
  return (
    <ol id="game-board" className="mx-auto mt-6 flex w-fit flex-col gap-2">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-2">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className={`h-24 w-24 rounded-lg bg-slate-800 text-4xl font-bold shadow transition hover:bg-slate-700 active:scale-95 disabled:cursor-not-allowed disabled:hover:bg-slate-800 disabled:active:scale-100 ${
                    playerSymbol === 'O' ? 'text-sky-400' : 'text-amber-400'
                  }`}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null || disabled}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}