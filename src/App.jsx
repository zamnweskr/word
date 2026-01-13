import Grid from './app/components/grid.jsx';
import gridGenerator from './app/utils/gridGenerator.js';
import { useState } from 'react';
import './App.css'
import './index.css'

function App() {
    const [grid, setGrid] = useState(gridGenerator())

    return (
        <Grid grid={grid}/>
    )
}

export default App