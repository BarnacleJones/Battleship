import './style.css';
import gameBoard from './dependencies/gameBoard';
import shipFactory from './dependencies/shipFactory';


//testing

//create board
let playBoard = gameBoard();
//create battleship
let battleship = shipFactory(4, 'battleship');
//place
playBoard.placeShip(battleship, 'vertical', 3,4 )
//attack x 4 to see if all ships are sunk
playBoard.receiveAttack(4,4);
playBoard.receiveAttack(3,4);
playBoard.receiveAttack(5,4);
playBoard.receiveAttack(6,4);
let gameover = playBoard.checkIfAllShipsSunk();
console.log(gameover)
