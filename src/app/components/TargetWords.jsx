import { useSelector } from "react-redux";

export const TargetWords = () => {
    const targetWords = useSelector((state) => state.game.targetWords)
    const foundWords = useSelector((state) => state.game.foundWords)
    const completedWords = useSelector((state) => state.game.completedWords)
    return (
        <div className='target-words-title'>
            <h3>Whuss tha word?!</h3>
            {
                targetWords.map((word) => {
                    return (
                        <span className={`target-words ${completedWords.includes(word) ? 'found-word' : ''}`} key={word}> {word}</span>
                    )
                })
            }
        </div>
    )
}

export default TargetWords