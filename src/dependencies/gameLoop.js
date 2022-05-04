import {shipFactory} from './shipFactory';
import {gameBoard} from './gameBoard';
import {player} from './player';
import {createBoards} from './frontEnd'


//create boards
let playerBoard = gameBoard();
let computerBoard = gameBoard();

//create players

let player1 = player("Player1", computerBoard);
let player2COMP = player("Player2COMP", playerBoard);
    
function gamePlay(){

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

    computerBoard.placeShip(computerBattleship, 'vertical', 3,3 );
    computerBoard.placeShip(computerPatrol, 'horizontal', 0,3 );
    computerBoard.placeShip(computerSubmarine, 'vertical', 3,6 );
    computerBoard.placeShip(computerDestroyer, 'horizontal', 8,1);
    computerBoard.placeShip(computerCarrier, 'horizontal', 9,1 );

    // playerBoard.receiveAttack(7,3);
    // playerBoard.receiveAttack(6,3);
    // playerBoard.receiveAttack(0,4);
    // computerBoard.receiveAttack(7,3);
    // computerBoard.receiveAttack(6,3);
    // let gameOver = playerBoard.checkIfAllShipsSunk();
    // while (!gameOver) {
        createBoards();
        // gameOver = playerBoard.checkIfAllShipsSunk();
    // }
}

function playerTurn(row, col)
{
    player1.takeTurn(row, col); 

    //immediately after, the computer takes a turn - for testing anyway
    let col2 = Math.floor(Math.random() * 10);
    let row2 = Math.floor(Math.random() * 10);
    player2COMP.takeTurn(col2, row2);  


    //check if all ships sunk
    let gameoverPlayer = playerBoard.checkIfAllShipsSunk();
    let gameoverComputer = computerBoard.checkIfAllShipsSunk()

    if (gameoverPlayer) {
        alert("Computer wins");
    }
    if (gameoverComputer) {
        alert("Player wins");
    }
}

export {gamePlay, playerBoard, computerBoard, playerTurn};
