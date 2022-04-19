const shipFactory = (length, name) =>{
  //define length of ship
  let ShipLength = length;
  let ShipName = name;
  //create an array of the length, representing a ship
  let lengthArray = [...Array(ShipLength)].map(x => 1);   
  //array for coordinates to be held
  let coordinates = [];

  //define hit function
  function hit(num)
  {
    //mark num as hit
    lengthArray[num] = 0;  
    // return lengthArray; 
  }

  
  function isSunk()
  {
    let sunk = true;
    lengthArray.forEach(element => {
      if (element == 1) {
        sunk = false;
      }      
    });
    return sunk;
  }

  return{ShipLength, ShipName, lengthArray, hit, isSunk, coordinates}

}
//for testing
let battleship = shipFactory(4, 'battleship');

  module.exports = battleship;