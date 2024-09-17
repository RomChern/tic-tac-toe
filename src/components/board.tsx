import { fieldSize } from "./game.tsx"
import { Fragment, ReactNode } from "react";
import { TSquare } from "../types/squares.ts";

type TProps = { squares: Array<TSquare>, children: (element: TSquare, index: number) => ReactNode }

export default function Board({ squares, children }: TProps) {
    return (
        <>
            {squares.map((element: TSquare, index: number) => {
                if ((index + 1) % fieldSize === 0 && index < squares.length - 1) {
                    return (
                        <Fragment key={index}>
                            {children(element, index)}
                            <br />
                        </Fragment>
                    )
                }
                return children(element, index)
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