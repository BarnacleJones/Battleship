const { ShipName, coordinates } = require("./shipFactory");

//gameboard factory
const gameBoard = () =>{

    //2d array 10x10
    //access values like a grid board[1][1] will be 1
    let board = [...Array(10)].map(x => [0,1,2,3,4,5,6,7,8,9])

    //create an array of ship names, so can determine which one is hit
    let shipArray = []
    
    //function to place the ship
    //remembering the 0 index value, so coords 4,3 (row,col), horiz will end up as
    //[4,3],[4,4],[4,5],[4,6]]
    function placeShip(ShipName, alignment,positionRow, positionCol)
    {
        //if the alignment is horizontal and the length of the alignment + ship length is less than 10 (length of board)
        if (alignment == 'horizontal' && (positionCol + ShipName.ShipLength < 10)) {
            
            for (let index = 0; index < ShipName.ShipLength; index++) {
                //update the ships coordinate array
                ShipName.coordinates.push([positionRow,(positionCol + index)]) 
                //update gameboard array
                this.board[positionRow][positionCol + index] = ShipName;
                shipArray.push(ShipName);
            }            
        }//if the alignment is vertical and the length of the alignment + ship length is less than 10 (length of board)
        else if (alignment == 'vertical' && (positionRow + ShipName.ShipLength < 10)) {
            for (let index = 0; index < ShipName.ShipLength; index++) {
                //update the ships coordinate array
                ShipName.coordinates.push([(positionRow + index),positionCol]);
                //update gameboard array
                this.board[positionRow + index][positionCol] = ShipName;
                shipArray.push(ShipName);
            } 
        }
        // else{alert('Bad ship placement')}
        else{return false;}
    }

    //Gameboards should have a receiveAttack function that takes a pair
    // of coordinates, determines whether or not the attack hit a ship
    // and then sends the ‘hit’ function to the correct ship, 
    //or records the coordinates of the missed shot.
    function receiveAttack(positionRow, positionCol)
    {
        //need int value of shipArray to mark which ship is hit - loop
       let whichShip = shipArray.forEach(element => {
            if (board[positionRow][positionCol] == element) {
                //this is a hit, return index of shipArray
                return element;
            }});

        if (whichShip == null) {
            //if it is blank, mark as missed
            board[positionRow][positionCol] == 'missed'
        }
        else if (whichShip == 'missed')
        {
            //already has been hit
            return false;
        }
        //if it is the name of a ship, mark that ship hit
        else{
            //get the coordinates, mark the specific index as hit
            //get ship name
            let ship = shipArray[whichShip];
            //get the coordinates array
            let shipIndex = ship.coordinates;
            //loop through that array, and see which index is the same as row/col
            let indexofShip = shipIndex.forEach(element => {
                if (element == [positionRow, positionCol]) {
                    return element;
                }
            });
            ship.hit(indexofShip);
        }
    }

   
return {board, placeShip, receiveAttack, shipArray}
}

let playBoard = gameBoard();

module.exports = playBoard;