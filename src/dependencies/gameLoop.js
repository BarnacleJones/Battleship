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

    playerBoard.missedShots = [];
    computerBoard.missedShots = [];

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

//Board placement for player
let battleshipRowCoord = Number(prompt("Please enter your Battleships x coordinate"));
let battleshipColCoord = Number(prompt("Please enter your Battleships y coordinate"));
let battleshipAlignment = prompt("Please enter your Battleships placement (horizontal or vertical)");        
playerBoard.placeShip(playerBattleship, battleshipAlignment, battleshipRowCoord,battleshipColCoord );
createBoards();

let patrolRowCoord = Number(prompt("Please enter your Patrols x coordinate"));
let patrolColCoord = Number(prompt("Please enter your Patrols y coordinate"));
let patrolAlignment = prompt("Please enter your Patrols placement (horizontal or vertical)");        
playerBoard.placeShip(playerPatrol, patrolAlignment, patrolRowCoord, patrolColCoord );
createBoards();

let submarineRowCoord = Number(prompt("Please enter your Submarine x coordinate"));
let submarineColCoord = Number(prompt("Please enter your Submarine y coordinate"));
let submarineAlignment = prompt("Please enter your Submarine placement (horizontal or vertical)");        
playerBoard.placeShip(playerSubmarine, submarineAlignment, submarineRowCoord,submarineColCoord );
createBoards();

let DestroyerRowCoord = Number(prompt("Please enter your Destroyer x coordinate"));
let DestroyerColCoord = Number(prompt("Please enter your Destroyer y coordinate"));
let DestroyerAlignment = prompt("Please enter your Destroyer placement (horizontal or vertical)");        
playerBoard.placeShip(playerDestroyer, DestroyerAlignment, DestroyerRowCoord,DestroyerColCoord );
createBoards();

let CarrierRowCoord = Number(prompt("Please enter your Carrier x coordinate"));
let CarrierColCoord = Number(prompt("Please enter your Carrier y coordinate"));
let CarrierAlignment = prompt("Please enter your Carrier placement (horizontal or vertical)");        
playerBoard.placeShip(playerCarrier, CarrierAlignment, CarrierRowCoord,CarrierColCoord );
createBoards();

computerBoard.placeShip(computerBattleship, 'vertical', 3,3 );
computerBoard.placeShip(computerPatrol, 'horizontal', 0,3 );
computerBoard.placeShip(computerSubmarine, 'vertical', 3,6 );
computerBoard.placeShip(computerDestroyer, 'horizontal', 8,1);
computerBoard.placeShip(computerCarrier, 'horizontal', 9,1 );

createBoards();
}

function playerTurn(row, col)
{
    player1.takeTurn(row, col); 

    //immediately after, the computer takes a turn - for testing anyway
    let col2 = Math.floor(Math.random() * 10);
    let row2 = Math.floor(Math.random() * 10);
    player2COMP.takeTurn(col2, row2);  


    //ensure game is started before congratulating winner...
    if (playerBoard.shipArray.length > 1) {
        
    
    //check if all ships sunk
    let gameoverPlayer = playerBoard.checkIfAllShipsSunk();
    let gameoverComputer = computerBoard.checkIfAllShipsSunk()

    if (gameoverPlayer) {
        alert("Computer wins!");
        location.reload();
    }
    if (gameoverComputer) {
        alert("Player wins!");
        location.reload();
    }
}
}

export {gamePlay, playerBoard, computerBoard, playerTurn};
