const { ShipName, coordinates, default: shipFactory } = require("./shipFactory");

//gameboard factory
const gameBoard = () =>{
    //2d array 10x10
    //access values like a grid board[1][1] will be 1
    let board = [...Array(10)].map(x => [0,1,2,3,4,5,6,7,8,9])
    //create an array of ship names, so can determine which one is hit
    let shipArray = []
    //bool value for determining if all ships on board are sunk
    let allShipsSunk = false;
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
                board[positionRow][positionCol + index] = ShipName;
                
            }    
            shipArray.push(ShipName);        
        }//if the alignment is vertical and the length of the alignment + ship length is less than 10 (length of board)
        else if (alignment == 'vertical' && (positionRow + ShipName.ShipLength < 10)) {
            for (let index = 0; index < ShipName.ShipLength; index++) {
                //update the ships coordinate array
                ShipName.coordinates.push([(positionRow + index),positionCol]);
                //update gameboard array
                board[positionRow + index][positionCol] = ShipName;
                
            } 
            shipArray.push(ShipName);
        }
        // else{alert('Bad ship placement')}
        else{return false;}
    }
    //receiveAttack function that takes a pair
    // of coordinates, determines whether or not the attack hit a ship
    // and then sends the ‘hit’ function to the correct ship, 
    //or records the coordinates of the missed shot.
    function receiveAttack(positionRow, positionCol)
    {
        let ship;
            if(board[positionRow][positionCol].ShipName == undefined)
            {
                //missed the shot
                // ship = 'missed';
                console.log("missed")

            }
            else{
                //assign object into 'ship'
                ship = board[positionRow][positionCol];
                //get the coordinates array
                let shipCoordinates = ship.coordinates;  
                //loop through that array, and see which index is the same as row/col
                let indexofShip;
                for (let i = 0; i < shipCoordinates.length; i++) {
                    let element = shipCoordinates[i];
                    if (element[0] == positionRow && element[1] == positionCol) {
                        //return index of shipCoordinates array,
                        //that is the value of the hit
                        indexofShip = i;
                    }
                }      
                //hit the ship at index   
                ship.hit(indexofShip);
                
            }
        //not doing anything with a missed shot at this stage, until I have a DOM
    }
    //Gameboards should be able to report whether or not all of their ships have been sunk.
    function checkIfAllShipsSunk()
    {
        //create bool
        allShipsSunk = true;

        //array to store true/false values into
        let checkForSinkageArray = [];

        //shipArray has list of ship objects, check each for if they are sunk
        shipArray.forEach(element => {
            let isSunk = element.isSunk()
            checkForSinkageArray.push(isSunk)
        });
        checkForSinkageArray.forEach(element => {
            if (element == false) {
                allShipsSunk = false;
            }
        });

        //check each value of shipArray.sunk 
        //if they are all 
        return allShipsSunk;
    }   
return {board, placeShip, receiveAttack, shipArray, checkIfAllShipsSunk}
}

export default gameBoard;

// module.exports = playBoard;