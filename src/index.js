import './style.css';
import { gamePlay, randomShips } from './dependencies/gameLoop';



let startButton = document.getElementById('startButton');
startButton.onclick = () => randomShips();
//call the game loop function
gamePlay();