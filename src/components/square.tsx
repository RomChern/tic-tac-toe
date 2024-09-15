import { TSquare } from "../types/squares";

type TProps = { value: TSquare, onSquareClick: () => void }

export default function Square({ value, onSquareClick }: TProps) {
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    );
}