import gridGenerator from "../utils/gridGenerator"
import './grid.css'

function Grid({ grid, onTileClick, selectedTile }) {

    return (
        <div className='grid-container'>
            {
                grid.map((row, rowID) => {
                    return (
                        <div className='grid-row' key={rowID}>{row.map((letter) => {
                            const isSelected = selectedTile && (selectedTile.row === letter.row && selectedTile.col === letter.col)
                            return (
                                <img
                                    className={`letter-tile ${isSelected ? 'selected' : ''}`}
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