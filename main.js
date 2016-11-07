
var boardObject = {

// The board is represented by a 2 dimensional array. 2 dimensional array is used for scalability.
// initiall, the board is empty.
  board:[
    ['E', 'O', 'E'],
    ['X', 'O', 'E'],
    ['X', 'O', 'X'],
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
    var winner;
    // Check horizontal match
    for ( j = 0; j < this.board.length; j+=1 ){
      var horizontalStrike = this.board[j].join("");
      if (horizontalStrike === "XXX"){
        console.log("X has won!");
        winner = "X";
      }
      if (horizontalStrike === "OOO"){
        console.log("O has won!");
        winner = "O";
      }
    }
    // check vertical match - 2 loops. Innerloop checks each row in the same column. Outer loop interates for every column
    for ( i = 0; i < this.board.length; i+=1 ){
      var verticalStrike = "";
      for ( j = 0; j < this.board.length; j+=1 ){
        verticalStrike = verticalStrike + this.board[j][i];
      }
      if (verticalStrike === "XXX"){
        console.log("X has won!");
        winner = "X";
      }
      if (verticalStrike === "OOO"){
        console.log("O has won!");
        winner = "O";
      }
    }
    if (winner ==="X" || winner ==="O" ){
      return winner;
    }
    return false;
  },
  // End of check win case method


  // Start of make move method
  turnCounter: 0,
  whoseTurn: function(){
    var currentPlayer;
    this.turnCounter += 1;
    if (this.turnCounter % 2 === 0){
      currentPlayer = "O";
      console.log("It's O's turn");
    } else {
      currentPlayer = "X";
      console.log("It's X's turn");
    }
    console.log(this.turnCounter);
    return currentPlayer;
  },

  makeMove: function(rowIn, colIn){
    var rowNum = rowIn;
    var colNum = colIn;
    this.whoseTurn();
    if (this.turnCounter % 2 === 0){
      this.board[rowNum][colNum] = "X";
    }
    if (this.turnCounter % 2 !== 0){
      this.board[rowNum][colNum] = "O";
    }
  },


  // End of make move method

};
boardObject.whoseTurn();
