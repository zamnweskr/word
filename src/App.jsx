import TargetWords from './app/components/TargetWords.jsx';
import Grid from './app/components/Grid.jsx'
import { wordDetector } from './app/utils/wordDetector.js';
import { areAdjacent } from './app/utils/gridHelpers.js';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTile, setGrid, setFoundWords } from './app/features/game/gameSlice.js';
import GameTimer from './app/components/GameTimer';
import './App.css'
import './index.css'


function App() {
    const dispatch = useDispatch()
    const grid = useSelector((state) => state.game.grid)
    const selectedTile = useSelector((state) => state.game.selectedTile)
    const targetWords = useSelector((state) => state.game.targetWords)
    const foundWords = useSelector((state) => state.game.foundWords)
    const initialGameTime = 120

    const onTileClick = (row, col) => {
        if (selectedTile === null) {
            dispatch(setSelectedTile({ row: row, col: col }))
        } else if (areAdjacent(selectedTile, { row: row, col: col })) {
            const newGrid = grid.map(row => row.map(tile => ({ ...tile })))
            const tile1 = { ...newGrid[selectedTile.row][selectedTile.col] }
            const tile2 = { ...newGrid[row][col] }
            tile1.row = row
            tile1.col = col
            tile2.row = selectedTile.row
            tile2.col = selectedTile.col
            newGrid[selectedTile.row][selectedTile.col] = tile2
            newGrid[row][col] = tile1
            dispatch(setGrid(newGrid))
            dispatch(setSelectedTile(null))

            wordDetector(newGrid).then(words => {
                const areWords = words.filter(word =>
                    targetWords.includes(word))
                if (areWords.length > 0) {
                    console.log("FOUND TARGET WORDS: ", areWords)
                    dispatch(setFoundWords(areWords))
                }
            })
        }
    }

    return (
        <>
            <TargetWords />
            <GameTimer initialSeconds={initialGameTime} />
            <Grid grid={grid}
                onTileClick={onTileClick}
                selectedTile={selectedTile}
            />
        </>

    )
}

export default App