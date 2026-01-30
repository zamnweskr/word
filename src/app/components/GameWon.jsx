import { useSelector, useDispatch } from "react-redux";
import { Modal, ModalBody, ModalHeader, Button, FormGroup, Label, ModalFooter} from 'reactstrap'
import { setGameWon } from "../features/game/gameSlice";
import { resetGame } from "../features/game/gameSlice";
import 'bootstrap/dist/css/bootstrap.min.css';


function GameWon() {
    const gameWon = useSelector((state) => state.game.gameWon)
    const dispatch = useDispatch()

    if (!gameWon) return null

    return (
        <div>
            <Modal isOpen={gameWon} >
                <ModalHeader >THATS WHASSUP!</ModalHeader>
                <ModalBody>
                    You win, want to try again?
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={() => dispatch(resetGame())}>
                        Try Again?
                    </Button>
                    <Button color='secondary' onClick={() => dispatch(setGameWon(false))}>
                        I'm Good!
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default GameWon


