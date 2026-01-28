import gridGenerator from "../utils/gridGenerator"
import '../features/game/grid.css'

function Grid({ grid, onTileClick, selectedTile, foundWords }) {

    const isTileMatched = (letter) => {
        return foundWords.some(fw => {
            if (fw.direction === 'horizontal') {
                const sameRow = letter.row === fw.rowIndex
                const inColumnRange = letter.col >= fw.startIndex && letter.col < fw.startIndex + fw.word.length
                return sameRow && inColumnRange
            } else if (fw.direction === 'vertical') {
                const sameCol = letter.col === fw.colIndex
                const inRowRange = letter.row >= fw.startIndex && letter.row < fw.startIndex + fw.word.length
                return sameCol && inRowRange
            }
            return false
        })
    }

    return (
        <div className='grid-container'>
            {
                grid.map((row, rowID) => {
                    return (
                        <div className='grid-row' key={rowID}>{row.map((letter, colIndex) => {
                            if (!letter) {
                                return (
                                    <div className='empty-tile' key={`empty-${colIndex}`}>

                                    </div>
                                )
                            }
                            const isSelected = selectedTile && (selectedTile.row === letter.row && selectedTile.col === letter.col)
                            return (
                                <img
                                    className={`letter-tile ${isSelected ? 'selected' : ''} ${isTileMatched(letter) ? 'tile-selected' : ''}`}
                                    key={letter.id}
                                    src={letter.src}
                                    alt={letter.name}
                                    onClick={() => onTileClick(
                                        letter.row,
                                        letter.col
                                    )}
                                />
                            )
                        })}</div>
                    )
                })
            }
        </div>
    )
}

export default Grid