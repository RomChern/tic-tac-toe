import { useState } from "react";

type TProps = { value: (string | null), onSquareClick: () => void }

export default function Square({ value, onSquareClick }: TProps) {
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    );
}