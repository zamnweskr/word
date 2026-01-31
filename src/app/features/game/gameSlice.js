import { createSlice } from "@reduxjs/toolkit";
import gridGenerator from "../../utils/gridGenerator";
import { getRandomWords } from "../../utils/targetWordGenerator";
import { LETTERS } from "../../shared/LETTERS";

const words = getRandomWords(5)

const initialState = {
    targetWords: words,
    grid: gridGenerator(words),
    selectedTile: null,
    foundWords: [],
    completedWords: [],
    gameWon: false,
    gameKey: 0
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGrid: (state, action) => {
            state.grid = action.payload
        },
        setSelectedTile: (state, action) => {
            state.selectedTile = action.payload
        },
        setFoundWords: (state, action) => {
            state.foundWords = action.payload
        },
        removeMatchedLetters: (state) => {
            state.foundWords.forEach(fw => {
                if (fw.direction === 'horizontal') {
                    for (let col = fw.startIndex; col < fw.startIndex + fw.word.length; col++) {
                        state.grid[fw.rowIndex][col] = null
                    }
                } else if (fw.direction === 'vertical') {
                    for (let row = fw.startIndex; row < fw.startIndex + fw.word.length; row++) {
                        state.grid[row][fw.colIndex] = null
                    }
                }
            })
        },
        letterDrop: (state) => {
            for (let col = 0; col < 6; col++) {
                for (let row = 5; row >= 0; row--) {
                    if (!state.grid[row][col]) {
                        for (let aboveRow = row - 1; aboveRow >= 0; aboveRow--) {
                            if (state.grid[aboveRow][col]) {
                                state.grid[row][col] = state.grid[aboveRow][col]
                                state.grid[row][col].row = row
                                state.grid[aboveRow][col] = null
                                state.grid[row][col].id = `${row}-${col}`
                                break
                            }
                        }
                    }
                }
            }
        },
        refillLetters: (state) => {
            for (let row = 0; row < 6; row++) {
                for (let col = 0; col < 6; col++) {
                    if (!state.grid[row][col]) {
                        const randomLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)]
                        const letterCell = {
                            ...randomLetter,
                            id: `${row}-${col}`,
                            row,
                            col,
                        }
                        state.grid[row][col] = letterCell
                    }
                }
            }
        },
        addCompletedWords: (state) => {
            const newWords = state.foundWords.map(fw => fw.word)
            state.completedWords = [...state.completedWords, ...newWords]
        },
        setGameWon: (state, action) => {
            state.gameWon = action.payload
        },
        setIsGameStarted: (state, action) => {
            state.isGameStarted = action.payload
        },
        resetGame: (state) => {
            const newWords = getRandomWords(5)
            state.targetWords = newWords
            state.grid = gridGenerator(newWords)
            state.selectedTile = null
            state.foundWords = []
            state.completedWords = []
            state.gameWon = false
            state.gameKey = state.gameKey + 1
        },
        startGameHandler: (state) => {
            state.isGameStarted = true
        }
    }
})

export const { setGrid, setSelectedTile, setFoundWords, removeMatchedLetters, letterDrop, refillLetters, addCompletedWords, setGameWon, resetGame, startGameHandler, setIsGameStarted } = gameSlice.actions
export const gameReducer = gameSlice.reducer