import TargetWords from './app/components/TargetWords.jsx';
import Grid from './app/components/Grid.jsx'
import { detectWords } from './app/utils/detectWords.js';
import { areAdjacent } from './app/utils/gridHelpers.js';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTile, setGrid, setFoundWords, removeMatchedLetters, letterDrop, refillLetters, addCompletedWords, setGameWon, startGameHandler } from './app/features/game/gameSlice.js';
import GameWon from './app/components/GameWon.jsx';
import GameTimer from './app/components/GameTimer';
import StartScreen from './app/components/StartScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './index.css'



function App() {
    const dispatch = useDispatch()
    const grid = useSelector((state) => state.game.grid)
    const selectedTile = useSelector((state) => state.game.selectedTile)
    const targetWords = useSelector((state) => state.game.targetWords)
    const foundWords = useSelector((state) => state.game.foundWords)
    const completedWords = useSelector((state) => state.game.completedWords)
    const gameWon = useSelector((state) => state.game.gameWon)
    const gameKey = useSelector((state) => state.game.gameKey)
    const isGameStarted = useSelector((state) => state.game.isGameStarted)
    const initialGameTime = 120

    // const startGameHandler = () => {
    //  setIsGameStarted(true);
    //  };

    const onTileClick = (row, col) => {
        if (selectedTile === null) {
            dispatch(setSelectedTile({ row: row, col: col }))
        } else if (areAdjacent(selectedTile, { row: row, col: col })) {
            const newGrid = grid.map(row => row.map(tile => ({ ...tile })))
            const tile1 = { ...newGrid[selectedTile.row][selectedTile.col] }
            const tile2 = { ...newGrid[row][col] }
            tile1.row = row
            tile1.col = col
            tile1.id = `${row}-${col}`
            tile2.row = selectedTile.row
            tile2.col = selectedTile.col
            tile2.id = `${selectedTile.row}-${selectedTile.col}`
            newGrid[selectedTile.row][selectedTile.col] = tile2
            newGrid[row][col] = tile1
            dispatch(setGrid(newGrid))
            dispatch(setSelectedTile(null))

            detectWords(newGrid).then(words => {
                const areWords = words.filter(word =>
                    targetWords.includes(word.word))
                if (areWords.length > 0) {
                    // console.log("FOUND TARGET WORDS: ", areWords)
                    dispatch(setFoundWords(areWords))
                    dispatch(addCompletedWords())
                    setTimeout(() => {
                        dispatch(removeMatchedLetters())
                        dispatch(setFoundWords([]))
                        setTimeout(() => {
                            dispatch(letterDrop())
                            dispatch(refillLetters())
                        }, 300)
                        setTimeout(() => {
                            if (completedWords.length + areWords.length >= targetWords.length) {
                                setTimeout(() => {
                                    dispatch(setGameWon(true))
                                }, 500)
                            }
                        }, 300)
                    }, 1000)
                }
            })
        }
    }


    return (
        <>
            {isGameStarted ? (
                <>
                    <GameWon />
                    <TargetWords />
                    <GameTimer key={gameKey} initialSeconds={initialGameTime} />
                    <Grid grid={grid}
                        onTileClick={onTileClick}
                        selectedTile={selectedTile}
                        foundWords={foundWords}
                    />
                </>
            ) : (
                <StartScreen onStartGame={() => dispatch(startGameHandler())} />
            )}
        </>
    )
}



export default App