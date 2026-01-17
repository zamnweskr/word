const areAdjacent = ( pos1, pos2 ) => {
    if ((pos1.row === pos2.row && Math.abs(pos1.col - pos2.col) === 1) || (pos1.col === pos2.col && Math.abs(pos1.row - pos2.row) === 1)) {
        return true
    }
}

export default areAdjacent