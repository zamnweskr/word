import gridGenerator from "./gridGenerator"

export const areAdjacent = (pos1, pos2) => {
    if ((pos1.row === pos2.row && Math.abs(pos1.col - pos2.col) === 1) || (pos1.col === pos2.col && Math.abs(pos1.row - pos2.row) === 1)) {
        return true
    }
}

export const createHWordString = (grid) => {
    return grid.map(row => {
        return row.map(letter => letter.name).join('')
    })

}

export const createVWordString = (grid) => {
    return grid[0].map((_, colIndex) => {
        return grid.map(row => row[colIndex].name).join('')
    })
}

export const getSubstrings = (line) => {
    const substrings = []
    for (let length = 4; length <= 6; length++) {
        for (let start = 0; start <= line.length - length; start++) {
            substrings.push(line.slice(start, start + length))
        }
    }
    return substrings
}