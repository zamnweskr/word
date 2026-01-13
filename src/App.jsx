import Grid from './app/components/grid.jsx';
import gridGenerator from './app/utils/gridGenerator.js';
import { useState } from 'react';
import './App.css'
import './index.css'

function App() {
    const [grid, setGrid] = useState(gridGenerator())
    const [selectedTile, setSelectedTile] = useState(null)

    const onTileClick = (row, col) => {
        setSelectedTile({ row: row, col: col})
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