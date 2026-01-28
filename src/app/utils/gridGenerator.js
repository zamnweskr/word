import { LETTERS } from "../shared/LETTERS"

const gridGenerator = (targetWords) => {
    const vowels = LETTERS.filter(letters => {
        return letters.vowel === true
    })
    const consonants = LETTERS.filter(letters => {
        return letters.vowel !== true
    })
    const requiredLetters = targetWords.map(words => {
        return words.split('')
    }).flat()

    const requiredLetterObjects = requiredLetters.map(letter => {
        const newLetter = LETTERS.find((letterObj) => letterObj.name === letter)
        return newLetter
    })

    const fillerCount = (36 - requiredLetterObjects.length)

    const getRandomLetter = () => {
        const chosenLetters = Math.random() < 0.4 ? vowels : consonants
        const randomChosen = Math.floor(Math.random() * chosenLetters.length)
        return chosenLetters[randomChosen]
    }

    const fillerLetters = Array(fillerCount).fill().map(() => {
        return getRandomLetter()
    })

    const allLettersArray = [...fillerLetters, ...requiredLetterObjects]

    const shuffledLetters = allLettersArray.sort(() => Math.random() - 0.5)

    const grid = []
    for (let row = 0; row < 6; row++) {
        const rowArray = []
        for (let col = 0; col < 6; col++) {
            const randomLetter = shuffledLetters.shift()
            const letterCell = {
                ...randomLetter,
                id: `${row}-${col}`,
                row,
                col,
            }
            if (letterCell.id === letterCell.id)
            rowArray.push(letterCell)
        }
        grid.push(rowArray)
    }

    // console.log(vowels)
    // console.log(consonants)
    // console.log(getRandomLetter())
    console.log(grid)

    return grid
}

export default gridGenerator