import Square from "./square";
import { fieldSize } from "./game.tsx"
import { Fragment } from "react";
import { TSquare } from "../types/squares.ts";

type TProps = { squares: Array<TSquare>, onClick: (index: number) => void }

export default function Board({ squares, onClick }: TProps) {
    return (
        <>
            {squares.map((element: TSquare, index: number) => {
                if ((index + 1) % fieldSize === 0 && index < squares.length - 1) {
                    return (
                        <Fragment key={index}>
                            <Square value={element} onSquareClick={() => onClick(index)} />
                            <br />
                        </Fragment>
                    )
                }
                return (<Square key={index} value={element} onSquareClick={() => onClick(index)} />)
            })
            }


            {/* <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div> */}
        </>
    );
}