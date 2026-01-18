import Grid from './app/components/grid.jsx';
import gridGenerator from './app/utils/gridGenerator.js';
import { wordDetector } from './app/utils/wordDetector.js';
import { areAdjacent, createHWordString, createVWordString, getSubstrings } from './app/utils/gridHelpers.js';
import { useState } from 'react';
import './App.css'
import './index.css'


function App() {
    const [grid, setGrid] = useState(gridGenerator())
    const [selectedTile, setSelectedTile] = useState(null)

    const onTileClick = (row, col) => {
        if (selectedTile === null) {
            setSelectedTile({ row: row, col: col })
        } else if (areAdjacent(selectedTile, { row: row, col: col })) {
            const newGrid = grid.map(row => [...row])
            const tile1 = newGrid[selectedTile.row][selectedTile.col]
            const tile2 = newGrid[row][col]
            newGrid[selectedTile.row][selectedTile.col] = tile2
            newGrid[row][col] = tile1
            tile2.row = selectedTile.row
            tile2.col = selectedTile.col
            tile1.row = row
            tile1.col = col
            setGrid(newGrid)
            setSelectedTile(null)
            wordDetector(newGrid).then(words => console.log('Found words: ', words))
            console.log(createHWordString(newGrid))
            console.log(createVWordString(newGrid))
        }
        console.log(row, col)
    }

    return (
        <Grid grid={grid}
            onTileClick={onTileClick}
            selectedTile={selectedTile}
        />
    )
}

export default App