import { type ReactNode } from "react";
import { TSquare } from "../types/squares.ts";


type TProps = { squares: Array<TSquare>, children: (element: TSquare, index: number) => ReactNode }

export default function Board({ squares, children }: TProps) {
    return (
        <>
            {squares.map((element: TSquare, index: number) => {
                return children(element, index)
            })
            }
        </>
    );
}