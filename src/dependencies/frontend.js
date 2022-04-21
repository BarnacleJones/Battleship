import {gamePlay, playerBoard, computerBoard} from './gameLoop'; 

function createBoards(){
    gamePlay();

    let playersBoard = document.getElementById('playerBoard');
    let computersBoard = document.getElementById('computerBoard');

    //create a grid 10x10 for player
    playerBoard.board.forEach(element => {
        let row = document.createElement('div');
        row.className = 'row';
        row.setAttribute('id', 'playerRowDiv')
        playersBoard.appendChild(row);
        element.forEach(element2 => {
            let column = document.createElement("div"); 
            column.setAttribute('id', 'playerCellsDiv');
            column.innerText = "";
            row.appendChild(column);
        });});

        //create a grid 10x10 for comp0uter
        computerBoard.board.forEach(element => {
            let row = document.createElement('div');
            row.className = 'row';
            row.setAttribute('id', 'computerRowDiv')
            computersBoard.appendChild(row);
            element.forEach(element2 => {
                let column = document.createElement("div"); 
                column.setAttribute('id', 'computerCellsDiv');
                column.innerText = "";
                row.appendChild(column);
            });});

        }
     


export {createBoards};