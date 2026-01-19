import { useSelector } from "react-redux";

export const TargetWords = () => {
    const targetWords = useSelector((state) => state.game.targetWords)
    return (
        <div className ='target-words-title'>
            <h3>Whuss tha word?!</h3>
            {
                targetWords.map((word) => {
                    return (
                        <span className='target-words' key={word}> {word}</span>
                    )
                })
            }
        </div>
    )
}

export default TargetWords