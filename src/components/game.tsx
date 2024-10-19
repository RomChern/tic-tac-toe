import { useState } from "react";
import Board from "./board"
import { MovesHistoryList } from "./moves-history-list";
import { calculateWinner } from "../utility/calculate-winner";
import { checkGamefieldFullfilled } from "../utility/check-gamefield-filling";
import { Status } from "./status";
import { Square as ESquare, TSquare } from "../types/squares";
import Square from "./square";
export const fieldSize = 3;


export default function Game() {
    const [isXNext, setIsXNext] = useState(true);
    const [history, setHistory] = useState<Array<Array<TSquare>>>([Array(fieldSize ** 2).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentMoveSquares = history[currentMove];
    const winner = calculateWinner(currentMoveSquares);
    const isGamefieldFullfilled = checkGamefieldFullfilled(currentMoveSquares)
    // const status = winner ? `Winner: ${winner}` : "Next player:" + (isXNext ? "X" : "O")
    const status = getGameStatus(winner, isGamefieldFullfilled);
    
    function getGameStatus(winner: TSquare,isGamefieldFullfilled: boolean) {
        if (winner) {
            return `Winner: ${winner}`;
        }
        if (isGamefieldFullfilled) {
            return `Winner: friends`;
        }
        return "Next player:" + (isXNext ? "X" : "O")

    }


    function updatePlay(currentMoveSquaresCopy: Array<TSquare>) {
        const updatedHistory = [...history.slice(0, currentMove + 1), currentMoveSquaresCopy];
        setHistory(updatedHistory);
        setCurrentMove(updatedHistory.length - 1);
        setIsXNext(!isXNext);
    }

    function handleJumpToMove(selectedMove: number) {
        setCurrentMove(selectedMove);
        setIsXNext(selectedMove % 2 === 0);
    }

    function handleClick(i: number) {
        if (currentMoveSquares[i] || winner) {
            return;
        }
        const currentMoveSquaresCopy = currentMoveSquares.slice();
        if (isXNext) {
            currentMoveSquaresCopy[i] = ESquare.X;
        } else {
            currentMoveSquaresCopy[i] = ESquare.O;
        }
        updatePlay(currentMoveSquaresCopy);
    }

    return (
        <div className="game">
            <Status status={status} />
            <div className="game-board">
                <Board squares={currentMoveSquares}>{(element, index) => <Square value={element} onSquareClick={() => handleClick(index)} />}</Board>
            </div>
            <div className="game-info">
                <MovesHistoryList history={history} onJumpTo={handleJumpToMove} />
            </div>
        </div>
    );
}