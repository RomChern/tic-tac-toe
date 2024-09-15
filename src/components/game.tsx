import { useState } from "react";
import Board from "./board"
import { TurnHistory } from "./turn-history";
import { calculateWinner } from "../utility/calculate-winner";
import { Status } from "./status";
import { TSquare } from "../types/squares";
export const fieldSize = 4;


export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState<Array<Array<TSquare>>>([Array(fieldSize ** 2).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const winner = calculateWinner(currentSquares);
    const status = winner ? `Winner: ${winner}` : "Next player:" + (xIsNext ? "X" : "O");

    function updatePlay(nextSquares: Array<TSquare>) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function handleJumpTo(nextMove: number) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    function handleClick(i: number) {
        if (currentSquares[i] || winner) {
            return;
        }
        const nextSquares = currentSquares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        updatePlay(nextSquares);
    }

    return (
        <div className="game">
            <Status status={status} />
            <div className="game-board">
                <Board squares={currentSquares} onClick={handleClick} />
            </div>
            <div className="game-info">
                <TurnHistory history={history} onJumpTo={handleJumpTo} />
            </div>
        </div>
    );
}