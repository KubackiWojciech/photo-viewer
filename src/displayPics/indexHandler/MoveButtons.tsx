import { useState } from "react";
import { useBetween } from "use-between";

import './MoveButtons.css'

export function IndexStates() {
    const [firstPicIndex, setfirstPicIndex] = useState(0);
    const moveRight = () => setfirstPicIndex(firstPicIndex +3);
    const moveLeft = () => setfirstPicIndex(firstPicIndex -3);


    return {
        firstPicIndex,
        moveRight,
        moveLeft
    }
}

const foo = () => {}

export function MoveLeftButton() {
    const {firstPicIndex, moveLeft} = useBetween(IndexStates);

    return (
        <button className = {firstPicIndex <= 0 ? 'disabled' : 'move-button'} onClick={firstPicIndex <= 0 ? foo : moveLeft}>Left</button>
    )
}

export function MoveRightButton() {
    const {firstPicIndex, moveRight} = useBetween(IndexStates);

    return (
        <button className = {firstPicIndex >= 27 ? 'disabled' : 'move-button'} onClick={firstPicIndex >= 27 ? foo : moveRight}>Right</button>
    )
}