import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const clickHandler = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClickSquare={() => clickHandler(0)} />
        <Square value={squares[1]} onClickSquare={() => clickHandler(1)} />
        <Square value={squares[2]} onClickSquare={() => clickHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClickSquare={() => clickHandler(3)} />
        <Square value={squares[4]} onClickSquare={() => clickHandler(4)} />
        <Square value={squares[5]} onClickSquare={() => clickHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClickSquare={() => clickHandler(6)} />
        <Square value={squares[7]} onClickSquare={() => clickHandler(7)} />
        <Square value={squares[8]} onClickSquare={() => clickHandler(8)} />
      </div>
    </div>
  );
};

export default Board;
