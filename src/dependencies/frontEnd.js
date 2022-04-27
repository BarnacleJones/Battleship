import {gamePlay, playerBoard, computerBoard} from './gameLoop'; 

function createBoards(){

    let playersBoard = document.getElementById('playerBoard');
    let computersBoard = document.getElementById('computerBoard');

    // //create a grid 10x10 for player  and computer
    //set the id of each box as the coordinates
    //access those coordinates for ship placement

    //player board
    for (let index = 0; index < playerBoard.board.length; index++) {
        //element is each row
        const element = playerBoard.board[index];
        //create a div for the row
        let col = document.createElement('div');
        // row.className = 'row';
        col.setAttribute('class', 'playerColDiv')            
        //create the columns
        for (let i = 0; i < element.length; i++) {
            // const element2 = element[index];
            let column = document.createElement("div"); 
            column.setAttribute('id', `[ ${i}, ${element[index]} ]`);
            column.setAttribute('class', 'playerCellsDiv');
            column.innerText = "";
            col.appendChild(column);
        }
        //append to dom
        playersBoard.appendChild(col);            
    }

    //computer board
    for (let index = 0; index < computerBoard.board.length; index++) {
        //element is each row
        const element = playerBoard.board[index];
        //create a div for the row
        let row = document.createElement('div');
        // row.className = 'row';
        row.setAttribute('class', 'computerRowDiv')            
        //create the columns
        for (let i = 0; i < element.length; i++) {
            // const element2 = element[index];
            let column = document.createElement("div"); 
            // column.setAttribute('id', `[ ${i}, ${element[index]} ]`);
            column.setAttribute('class', 'computerCellsDiv');
            column.innerText = "";
            row.appendChild(column);
        }
        //append to dom
        computersBoard.appendChild(row);            
    } 

    //render each ship on the players board
    playerBoard.shipArray.forEach(element => {        
        // let square = document.getElementById(element);
        //get the ships coordinates
        let coordArray = element.coordinates;
        //go through each coordinate, set the DOM value (same as coords) to red as the ship is placed there
        coordArray.forEach(item => {            
            document.getElementById(`[ ${item[0]}, ${item[1]} ]`).style.backgroundColor = 'red';
        });
    });

    //render missed shots on the players board
    playerBoard.missedShots.forEach(element => {
        let id = `[ ${element[0]}, ${element[1]} ]`;
        document.getElementById(id).style.backgroundColor = 'grey';
    });

    //render hit shots on the players board
    let square;
    //go through each ship on the board
    playerBoard.shipArray.forEach(element => {
        for (let index = 0; index < element.lengthArray.length; index++) {
            //go through the 1/0 values on the ships length (0 means hit)
            const value = element.lengthArray[index];
            if (value == 0) 
            {
                //assign coordinate values to 'square'
                square = element.coordinates[index];
            }
        }
    });
    document.getElementById(`[ ${square[0]}, ${square[1]} ]`).style.backgroundColor = 'green';

    }
export {createBoards};