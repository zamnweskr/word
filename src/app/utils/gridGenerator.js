import { LETTERS } from "../shared/LETTERS"
import React, { useState } from 'react';

const gridGenerator = () => {
    const vowels = LETTERS.filter(letters => {
        return letters.vowel === true
    })
    const consonants = LETTERS.filter(letters => {
        return letters.vowel !== true
    })

    const getRandomLetter = () => {
        const chosenLetters = Math.random() < 0.4 ? vowels : consonants
        const randomChosen = Math.floor(Math.random() * chosenLetters.length)
        return chosenLetters[randomChosen]
}
console.log(vowels)
console.log(consonants)
console.log(getRandomLetter())

}

export default gridGenerator