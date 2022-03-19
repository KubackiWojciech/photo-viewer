import { useState } from "react";
import { useBetween } from "use-between";

import React from 'react'

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

export default function MoveButtons() {
    const {moveRight, moveLeft} = useBetween(IndexStates);

    return (
        <>
        <button onClick={moveLeft}>Left</button>
        <button onClick={moveRight}>Right</button>
        </>
    )
}