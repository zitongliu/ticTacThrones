
var boardObject = {

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
  won:false,
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
        winner = "O";
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
      this.won = true;
      return winner;
    }
    return false;
  },
  // End of check win case method

  turnCounter: 1,
  currentPlayer:"X",
  whoseTurn: function(){
    if (this.won === true){
      console.log("inside won true has ran");
      return true;
    }
    if (this.currentPlayer === "X"){
      console.log("It's",player1.name+"'s turn!'");
    } else if (this.currentPlayer === "O"){
      console.log("It's",player2.name+"'s turn!'");
    } else {

    }
    return;
  },


  // Start of advance turn
  advanceTurn: function(){
    if (this.won === true){
      return true;
    }
    this.turnCounter += 1;
    if (this.currentPlayer ==="X"){
      this.currentPlayer = "O";
    } else if (this.currentPlayer ==="O"){
      this.currentPlayer = "X";
    } else {

    }
    return;
  },

  // end of advance turn



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
      boardObject.advanceTurn();
      boardObject.whoseTurn();
    },
  };
  return playerObject;
};

var onClickMakeMove = function () {
  console.log(this);
  var classOfTileClicked = $(this).attr("class");
  console.log(classOfTileClicked);
  if (classOfTileClicked === "tile1"){
  player1.makeMove(0,0);
  console.log(this);
}
  if (classOfTileClicked === "tile2"){
  player1.makeMove(0,1);
  console.log(this);
}
  if (classOfTileClicked === "tile3"){
  player1.makeMove(0,2);
}
if (classOfTileClicked === "tile4"){
player1.makeMove(1,0);
}
if (classOfTileClicked === "tile5"){
player1.makeMove(1,1);
}
if (classOfTileClicked === "tile6"){
player1.makeMove(1,2);
}
if (classOfTileClicked === "tile7"){
player1.makeMove(2,0);
}
if (classOfTileClicked === "tile8"){
player1.makeMove(2,1);
}
if (classOfTileClicked === "tile9"){
player1.makeMove(2,1);
}
};

var notify = function(){
  console.log("notify function is running!");
};


var putSymbolIn = function(){
  // var $nodeX = $("<p>X</p>");
  if (boardObject.currentPlayer === "O"){
    $(this).append("<p>X</p>");
  }
  else {
    $(this).append("<p>O</p>");
  }
};



var player1 = new playerFactory("Steve","X");
var player2 = new playerFactory("Jim","O");
boardObject.whoseTurn();
$(".boardContainer>div").on("click",onClickMakeMove);
$(".boardContainer>div").on("click",notify);
$(".boardContainer>div").on("click",putSymbolIn);
