/* import { useState } from "react";

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
} */
import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    onChangeName(symbol, event.target.value);
  }

  const nameElement = isEditing ? (
    <input
      type="text"
      required
      value={name}
      onChange={handleChange}
      className="w-32 rounded bg-slate-900 px-2 py-1 text-white outline-none"
    />
  ) : (
    <span className="px-2 py-1 font-semibold">{name}</span>
  );

  return (
    <li
      className={`flex flex-1 items-center justify-between rounded-lg border-2 px-4 py-3 transition ${
        isActive
          ? 'border-amber-400 bg-slate-800'
          : 'border-transparent bg-slate-800/50'
      }`}
    >
      <span className="flex items-center gap-2">
        {nameElement}
        <span className="text-xl font-bold text-amber-400">{symbol}</span>
      </span>
      <button
        onClick={handleEditClick}
        className="text-sm text-slate-300 hover:text-white"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}