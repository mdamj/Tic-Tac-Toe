import {useState} from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
    const[gameBoard,setGameBoard]=useState(initialGameBoard);
    //We use an updater function because the new state depends on the previous state. We never mutate state directly, because React relies on reference changes to detect updates. 
    // Since the board is a 2D array, a shallow copy is not enough: the rows are shared by reference. So we copy the outer array and each inner array, update the copy, and return it.
    function handleGame(rowIndex,colIndex){
        setGameBoard((prevGame)=>{
            const updateGame=[...prevGame.map(innerArray=>[...innerArray])];
            updateGame[rowIndex][colIndex]='X';
            return updateGame;
        });


    }
  return (
    <ol id="game-board" className="mx-auto mt-6 flex w-fit flex-col gap-2">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-2">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="h-24 w-24 rounded-lg bg-slate-800 text-4xl font-bold text-amber-400 shadow transition hover:bg-slate-700 active:scale-95"
                  onClick={()=>handleGame(rowIndex,colIndex)}>{playerSymbol}
                
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
} 