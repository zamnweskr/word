import { WORDS } from '../shared/WORDS'
import gridGenerator from "./gridGenerator";
import { createHWordString, createVWordString, getSubstrings } from "./gridHelpers";



function checkIfWord(line) {
    return WORDS.has(line)
    // try {
    //     const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${line}`);

    //     if (response.ok) {
    //         await response.json();
    //         console.log(`"${line}" is a valid word!`);
    //         return true;
    //     } else {
    //         console.log(`"${line}" is not a valid word`);
    //         return false;
    //     }
    // } catch (error) {
    //     console.log('Error checking word:', error);
    //     return false;
    // }
}

export const wordDetector = async (grid) => {
    const horizontalStrings = createHWordString(grid)
    const verticalStrings = createVWordString(grid)
    const allStrings = [...horizontalStrings, ...verticalStrings]
    const foundWords = []
    for (const str of allStrings) {
        const substrings = getSubstrings(str)
        for (const substring of substrings) {
            if (checkIfWord(substring)) {
                foundWords.push(substring)
            }
        }
    }
    return foundWords
}


export default checkIfWord