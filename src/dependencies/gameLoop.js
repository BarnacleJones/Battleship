import {shipFactory} from './shipFactory';
import {gameBoard} from './gameBoard';
import {player} from './player';


    //create boards
    let playerBoard = gameBoard();
    let computerBoard = gameBoard();
    
function gamePlay(){


    //create players
    let player1 = player("Player1", computerBoard);
    let player2COMP = player("Player2COMP", playerBoard);

    //create player ships
    let playerBattleship = shipFactory(4, 'battleship');
    let playerPatrol = shipFactory(2, 'patrol');
    let playerSubmarine = shipFactory(3, 'submarine');
    let playerDestroyer = shipFactory(4, 'destroyer');
    let playerCarrier = shipFactory(5, 'carrier');

    //create computer ships
    let computerBattleship = shipFactory(4, 'battleship');
    let computerPatrol = shipFactory(2, 'patrol');
    let computerSubmarine = shipFactory(3, 'submarine');
    let computerDestroyer = shipFactory(4, 'destroyer');
    let computerCarrier = shipFactory(5, 'carrier');

    //place player ships
    // playerBoard.placeShip(playerBattleship, 'vertical', 3,4 )
}


// //attack x 4 to see if all ships are sunk
// playBoard.receiveAttack(4,4);
// playBoard.receiveAttack(3,4);
// playBoard.receiveAttack(5,4);
// playBoard.receiveAttack(6,4);
// let gameover = playBoard.checkIfAllShipsSunk();
// console.log(gameover)

export {gamePlay, playerBoard, computerBoard};