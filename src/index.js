import './style.css';
import { gamePlay } from './dependencies/gameLoop';
import {createBoards} from './dependencies/frontEnd'


let startButton = document.getElementById('startButton');
startButton.onclick = () => gamePlay();
document.getElementById('restartButton').onclick = () => location.reload();
// startButton.addEventListener("click", gamePlay)
//call the game loop function
createBoards();