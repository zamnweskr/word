import { WORDS } from  '../shared/WORDS'

export const getRandomWords = (count) => {
    const wordsArray = [...WORDS]
    const randomWords = wordsArray.sort(() => Math.random() - 0.5)
    return randomWords.slice(0, count)
}