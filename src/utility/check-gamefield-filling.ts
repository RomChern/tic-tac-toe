import { TSquare } from "../types/squares";

export function checkGamefieldFullfilled(currentMoveSquares: Array<TSquare>): boolean {
    for (let i=0; i<currentMoveSquares.length; i++) {
        if (currentMoveSquares[i] === null) {
            return false
        }
    }
    return true
}