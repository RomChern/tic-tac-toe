import { TSquare } from "../types/squares";

type TProps = { history: Array<Array<TSquare>>, onJumpTo: (move: number) => void }

export const MovesHistoryList = ({ history, onJumpTo }: TProps) => {
    const moves = history.map((_, move: number) => {
        const description = move > 0 ? `Go to move # ${move}` : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => onJumpTo(move)}>{description}</button>
            </li>
        );
    });

    return <ol>{moves}</ol>
}