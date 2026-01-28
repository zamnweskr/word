import TargetWords from '../components/TargetWords';
import { WORDS } from '../shared/WORDS'
import gridGenerator from "./gridGenerator";
import { createHWordString, createVWordString, getSubstrings } from "./gridHelpers";



function checkIfWord(word) {
    return WORDS.has(word)
}

export const detectWords = async (grid) => {
    const horizontalStrings = createHWordString(grid)
    const verticalStrings = createVWordString(grid)
    // const allStrings = [...horizontalStrings, ...verticalStrings]
    const detectedWords = []

    horizontalStrings.forEach((str, rowIndex) => {
        const substrings = getSubstrings(str)
        for (const substring of substrings) {
            if (checkIfWord(substring.word)) {
                detectedWords.push({
                    word: substring.word,
                    direction: 'horizontal',
                    rowIndex: rowIndex,
                    startIndex: substring.startIndex
                })
            }
        }
    })

    verticalStrings.forEach((str, colIndex) => {
        const substrings = getSubstrings(str)
        for (const substring of substrings) {
            if (checkIfWord(substring.word)) {
                detectedWords.push({
                    word: substring.word,
                    direction: 'vertical',
                    colIndex: colIndex,
                    startIndex: substring.startIndex
                })
            }
        }
    })

    // for (const str of allStrings) {
    //     const substrings = getSubstrings(str)
    //     for (const substring of substrings) {
    //         if (checkIfWord(substring.word)) {
    //             foundWords.push({
    //                 word: substring.word,
    //                 startIndex: substring.startIndex
    //             })
    //         }
    //     }
    // }

    return detectedWords
}
 


export default checkIfWord