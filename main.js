
var boardObject = {
  won:false,

// The board is represented by a 2 dimensional array. 2 dimensional array is used for scalability.
// initiall, the board is empty.
  board:[
    ['E', 'E', 'E'],
    ['E', 'E', 'E'],
    ['E', 'E', 'E'],
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
        console.log(player1.name,"has won!");
        winner = "X";
      }
      if (horizontalStrike === "OOO"){
        console.log(player2.name,"has won!");
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
        console.log(player1.name,"has won!");
        winner = "X";
      }
      if (verticalStrike === "OOO"){
        console.log(player2.name,"has won!");
        winner = "O";
      }
    }
    var diagonalOne = "";
    var diagonalTwo = "";
    // check diagonal match - left top to right bottom
    for (j = 0, i = 0; j<this.board.length; j++, i++){

      diagonalOne = diagonalOne + this.board[j][i];
      if (diagonalOne === "XXX"){
        console.log(player1.name,"has won!");
        winner = "X";
      }
      if (diagonalOne === "OOO"){
        console.log(player2.name,"has won!");
        winnder = "O";
      }
    }
    // check diagonal match - right top to left bottom
    for (j = 0, i = this.board.length -1; j<this.board.length; j++, i--){
      diagonalTwo = diagonalTwo + this.board[j][i];
      if (diagonalTwo === "XXX"){
        console.log(player1.name,"has won!");
        winner = "X";
      }
      if (diagonalTwo === "OOO"){
        console.log(player2.name,"has won!");
        winnder = "O";
      }
    }
    if (winner ==="X" || winner ==="O" ){
      boardObject.won = true;
      return winner;
    }
    return false;
  },
  // End of check win case method


  turnCounter: 0,
  whoseTurn: function(){
    var currentPlayer;
    this.turnCounter += 1;
    if (boardObject.won === true){
      return currentPlayer;
    }
    if (this.turnCounter % 2 === 0){
      currentPlayer = "O";
      console.log("It's",player2.name+"'s turn");
    } else {
      currentPlayer = "X";
      console.log("It's",player1.name+"'s turn");
    }
    console.log(this.turnCounter);
    return currentPlayer;
  },
  //// Start of make move method
  // makeMove: function(rowIn, colIn){
  //   var rowNum = rowIn;
  //   var colNum = colIn;
  //   this.whoseTurn();
  //   if (this.turnCounter % 2 === 0){
  //     this.board[rowNum][colNum] = "X";
  //   }
  //   if (this.turnCounter % 2 !== 0){
  //     this.board[rowNum][colNum] = "O";
  //   }
  // },


  // End of make move method

};

var playerFactory = function(nameIn,symbolIn) {
  playerObject = {
    name:nameIn,
    symbol:symbolIn,
    makeMove:function(rowIn,colIn){
      boardObject.board[rowIn][colIn] = this.symbol;
      boardObject.checkWinCase();
      boardObject.whoseTurn();
    },
  };
  return playerObject;
};

var player1 = new playerFactory("Steve","X");
var player2 = new playerFactory("Jim","O");
boardObject.whoseTurn();

var notify = function(){
  console.log(this);
};

$(".boardContainer>div").on("click",notify);
