import {shipFactory} from './shipFactory';
import {gameBoard} from './gameBoard';
import {player} from './player';
import {createBoards} from './frontEnd'


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
    playerBoard.placeShip(playerBattleship, 'vertical', 3,3 );
    playerBoard.placeShip(playerPatrol, 'horizontal', 0,3 );
    playerBoard.placeShip(playerSubmarine, 'vertical', 3,6 );
    playerBoard.placeShip(playerDestroyer, 'horizontal', 8,1);
    playerBoard.placeShip(playerCarrier, 'horizontal', 9,1 );

    playerBoard.receiveAttack(7,3);
    // let gameOver = playerBoard.checkIfAllShipsSunk();
    // while (!gameOver) {
        createBoards();
        // gameOver = playerBoard.checkIfAllShipsSunk();
    // }
}

export {gamePlay, playerBoard, computerBoard};