import { createSlice } from "@reduxjs/toolkit";
import gridGenerator from "../../utils/gridGenerator";
import { getRandomWords } from "../../utils/targetWordGenerator";

const words = getRandomWords(5)

const initialState = {
    targetWords: words,
    grid: gridGenerator(words),
    selectedTile: null,
    foundWords: []
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
        }
    }
})

export const { setGrid, setSelectedTile, setFoundWords } = gameSlice.actions
export const gameReducer = gameSlice.reducer