const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
];
export default function GameBoard(){
    return <ol id="game-board">
        {initialGameBoard.map((row)=><li key={rowIndex}>
            <ol>
                {row.map(,colIndex)=><li key={colIndex}><button>{}</button></li>}
                </ol>
                </li>)}

    </ol>;

    
}
