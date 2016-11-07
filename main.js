
var boardObject = {

// The board is represented by a 2 dimensional array. 2 dimensional array is used for scalability.
// initiall, the board is empty.
  board:[
    ['E', 'E', 'E'],
    ['X', 'E', 'E'],
    ['X', 'X', 'X'],
  ],

  // Start of noEmptyTiles Method
  // Method that checks if there's empyty tiles left on the board. A for loop inside another for loop. Checks each element inside each array.
  noEmptyTiles: function(){
    for ( j = 0; j < this.board.length; i += 1) {
      for ( i = 0; i < this.board[0].length; i +=1 ){
        if (this.board[j][i] !== "E"){
          return true;
        } else {
          message = "There are still empty tiles";
          return message;
        }
      }

    }
  },
  // End of noEmptyTiles method

  // Start of check win case method
  checkWinCase: function(){

    // Check horizontal match
    for ( j = 0; j < this.board.length; j+=1 ){
        var horizontalStrike = this.board[j].join("");
        if (horizontalStrike === "XXX"){
          console.log("X has won!");
        }
        if (horizontalStrike === "OOO"){
          console.log("O has won!");
        }
    }
  },
  // End of check win case method






};
