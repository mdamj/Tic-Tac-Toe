import { useState } from "react";

export default function Player({ initialName, symbol,isActive }) {
  const [isPlayer,setIsPlayer]=useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleName(event){
    setIsPlayer(event.target.value);

  }

  function handleClick() {
  // Use the function form when new state depends on old state:
// React gives you the latest value, not a stale snapshot.
  setIsEditing((editing) => !editing);
}
  let playerName = (
    <span className="player-name font-semibold uppercase">{isPlayer}</span>
  );

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required value={isPlayer} onChange={handleName}
        className="w-32 rounded border border-slate-500 bg-slate-900 px-2 py-1 text-white outline-none focus:border-amber-400"
      />
    );
  }

  return (
    <li className={isActive ? "ring-2 right-amber-400":""}>
      <span className="player flex items-center gap-3">
        {playerName}
        <span className="player-symbol text-xl font-bold text-amber-400">
          {symbol}
        </span>
      </span>
      <button
        onClick={handleClick}
        className="rounded bg-amber-400 px-3 py-1 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
      >
        {isEditing?'Save' : 'Edit'}
      </button>
    </li>
  );
}