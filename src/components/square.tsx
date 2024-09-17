import { memo } from "react";
import { TSquare } from "../types/squares";

type TProps = { value: TSquare, onSquareClick: () => void }

 function Square({ value, onSquareClick }: TProps) {
    console.log("render");
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    );
}

export default memo(Square);