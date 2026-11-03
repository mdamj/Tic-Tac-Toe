export default function Log({ turns, players }) {
  return (
    <ol className="mx-auto my-6 max-w-2xl space-y-1 text-center text-slate-300">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {players[turn.player]} selected row {turn.square.row + 1}, col{' '}
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}