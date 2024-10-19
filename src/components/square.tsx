import { TSquare } from "../types/squares";

type TProps = { value: TSquare, onSquareClick: () => void }

 function Square({ value, onSquareClick }: TProps) {
    return (
        <div className="square" onClick={onSquareClick}>{value}</div>
    );
}

export default Square;