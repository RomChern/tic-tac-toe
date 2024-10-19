import { fieldSize } from "./game.tsx"
import { Fragment, type ReactNode } from "react";
import { TSquare } from "../types/squares.ts";

function isLastElementInLine(index: number, arrayLength: number) {
    return (index + 1) % fieldSize === 0 && index < arrayLength - 1
}

type TProps = { squares: Array<TSquare>, children: (element: TSquare, index: number) => ReactNode }

export default function Board({ squares, children }: TProps) {
    return (
        <>
            {squares.map((element: TSquare, index: number) => {
                if (isLastElementInLine(index, squares.length)) {
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
        </>
    );
}