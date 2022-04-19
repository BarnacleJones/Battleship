const playBoard = require('../dependencies/gameBoard.js');
const battleship = require('../dependencies/shipFactory.js');

test('ensures gameboard Array exists', () => {
  expect(playBoard.board[9]).toStrictEqual([0,1,2,3,4,5,6,7,8,9]);
});

test('ensures gameboard Array and can access values like a grid', () => {
  expect(playBoard.board[1][1]).toStrictEqual(1);
});

//Got all these tests to run, but changing the values more than once causes them to break

    //place battleship test horiz
  playBoard.placeShip(battleship, 'horizontal', 4,3 )

  test('ensures ships are placed on the board', () => {
    expect(battleship.coordinates).toStrictEqual([[4,3],[4,4],[4,5],[4,6]]);
  });

    // //place battleship test vertical
    // playBoard.placeShip(battleship, 'vertical', 3,4 )

    // test('ensures ships are placed on the board', () => {
    //   expect(battleship.coordinates).toStrictEqual([[3,4],[4,4],[5,4],[6,4]]);
    // });


    //place battleship test overflow

    // test('ensures ships are placed on the board', () => {
    //   expect(playBoard.placeShip(battleship, 'vertical', 9,4 )).toBe(false);
    // });

///end
playBoard.receiveAttack(4,5);

    test('ensures ships can recieve attack', () => {
      expect(battleship.lengthArray).toBe([1,1,0,1]);
    });