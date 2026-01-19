import { createSlice } from "@reduxjs/toolkit";
import gridGenerator from "../../utils/gridGenerator";
import { getRandomWords } from "../../utils/targetWordGenerator";


const initialState = {
    grid: gridGenerator(),
    selectedTile: null,
    targetWords: getRandomWords(5),
    foundWords: []
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setSelectedTile: (state, action) => {
            state.selectedTile = action.payload
        },
        setGrid: (state, action) => {
            state.grid = action.payload
        }
    }
})

export const { setSelectedTile, setGrid } = gameSlice.actions
export const gameReducer = gameSlice.reducer