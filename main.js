
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
        winner = "O";
      }
    }
    if (winner ==="X" || winner ==="O" ){
      this.won = true;
      return winner;
    }
    return false;
  },
  // End of check win case method

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
    if (this.currentPlayer ==="X"){
      this.currentPlayer = "O";
    } else if (this.currentPlayer ==="O"){
      this.currentPlayer = "X";
    } else {

    }
    return;
  },

  // end of advance turn

  // Start of reset Game

  resetGame: function () {
    this.board =[
      ['E', 'E', 'E'],
      ['E', 'E', 'E'],
      ['E', 'E', 'E'],
    ];
    console.log(this);
    this.currentPlayer = "X";
    this.won = false;
    $(".boardContainer p").remove();
  },



};

// Start of score counter object

var scoreBoard = {
  player1:0,
  player2:0,
  ai:0,
  addWin: function(player){
    winningPlayer = player;
    if (winningPlayer === "X"){
      this.player1 += 1;
    } else if (winningPlayer ==="O"){
      this.player2 += 1;
    } else if (winningPlayer === "ai"){
      this.ai += 1;
    } else {}
    return player;
  },
};




// End of score counter ojbect







var playerFactory = function(nameIn,symbolIn) {
  playerObject = {
    name:nameIn,
    symbol:symbolIn,
    makeMove:function(rowIn,colIn){
      boardObject.board[rowIn][colIn] = this.symbol;
      var winner = boardObject.checkWinCase();
      if (winner !== false){
        var $victoryMessageBox = $("<div></div>").addClass("victory");
        $victoryMessageBox.css({
          "width":"50vw",
          "height":"50vh",
          "background":"rgba(0,0,0,0.5)",
          "zIndex":"99999999",
          "position":"fixed",
          "top":"25%",
          "left":"25%",
          "font-size":"60px",
          "color":"white",
          "padding-top":"1em",
        });
        $victoryMessageBox.html("You Win");
        $("body").append($victoryMessageBox);
      }
      scoreBoard.addWin(winner);
      boardObject.advanceTurn();
      boardObject.whoseTurn();
    },
  };
  return playerObject;
};

var onClickMakeMove = function () {
  var classOfTileClicked = $(this).attr("class");
  if ( (classOfTileClicked === "tile1") && (boardObject.currentPlayer === "X") ){
  player1.makeMove(0,0);
  return;
  }
  if ( (classOfTileClicked === "tile2") && (boardObject.currentPlayer === "X") ){
  player1.makeMove(0,1);
  return;
  }
  if ( (classOfTileClicked === "tile3") && (boardObject.currentPlayer === "X") ){
  player1.makeMove(0,2);
  return;
  }
  if ( (classOfTileClicked === "tile4") && (boardObject.currentPlayer === "X") ){
  player1.makeMove(1,0);
  return;
  }
  if ( (classOfTileClicked === "tile5") && (boardObject.currentPlayer === "X") ){
  player1.makeMove(1,1);
  return;
  }
  if ( (classOfTileClicked === "tile6") && (boardObject.currentPlayer === "X")){
  player1.makeMove(1,2);
  return;
  }
  if ( (classOfTileClicked === "tile7") && (boardObject.currentPlayer === "X") ){
  player1.makeMove(2,0);
  return;
  }
  if ( (classOfTileClicked === "tile8") && (boardObject.currentPlayer === "X") ){
  player1.makeMove(2,1);
  return;
  }
  if ( (classOfTileClicked === "tile9") && (boardObject.currentPlayer === "X") ){
  player1.makeMove(2,2);
  return;
  }
  // For player 2
  if ( (classOfTileClicked === "tile1") && (boardObject.currentPlayer === "O") ){
  player2.makeMove(0,0);
  return;
  }
  if ( (classOfTileClicked === "tile2") && (boardObject.currentPlayer === "O") ){
  player2.makeMove(0,1);
  return;
  }
  if ( (classOfTileClicked === "tile3") && (boardObject.currentPlayer === "O") ){
  player2.makeMove(0,2);
  return;
  }
  if ( (classOfTileClicked === "tile4") && (boardObject.currentPlayer === "O") ){
  player2.makeMove(1,0);
  return;
  }
  if ( (classOfTileClicked === "tile5") && (boardObject.currentPlayer === "O") ){
  player2.makeMove(1,1);
  return;
  }
  if ( (classOfTileClicked === "tile6") && (boardObject.currentPlayer === "O")){
  player2.makeMove(1,2);
  return;
  }
  if ( (classOfTileClicked === "tile7") && (boardObject.currentPlayer === "O") ){
  player2.makeMove(2,0);
  return;
  }
  if ( (classOfTileClicked === "tile8") && (boardObject.currentPlayer === "O") ){
  player2.makeMove(2,1);
  return;
  }
  if ( (classOfTileClicked === "tile9") && (boardObject.currentPlayer === "O") ){
  player2.makeMove(2,2);
  return;
  }

};

var putSymbolIn = function(){
  // var $nodeX = $("<p>X</p>");
  if (boardObject.won === true){
    console.log("Game has ended");
    return;
  }
  if ( (boardObject.currentPlayer === "X") && ( $(this).html()==="" ) ){
    $(this).append("<p>X</p>");
  }
  else if ( (boardObject.currentPlayer === "O") && ( $(this).html()==="" ) ){
    $(this).append("<p>O</p>");
  }
};

var notify = function(){
  console.log(this);
};

var player1 = new playerFactory("Steve","X");
var player2 = new playerFactory("Jim","O");
boardObject.whoseTurn();
$(".boardContainer td").on("click",notify);
$(".boardContainer td").on("click",putSymbolIn);
$(".boardContainer td").on("click",onClickMakeMove);

var onClickResetGame = function (){
  boardObject.resetGame();
};
$("#reset").on("click",onClickResetGame);

// Create a jQuery node of the side menu
var $asideMenu = $("aside");

// Create callback function
var moveSideMenuCenter = function(){
  $asideMenu.toggleClass("asideClicked");
};

$asideMenu.on("click",moveSideMenuCenter);

// $asideMenu.on("click", function() {
  // this will be the dom element
  // $(this) will be the jquery wrapped
  // moveSideMenuCenter("arg");
// })

var $enterName = $("options");
var expandEnterName = function (){
  $enterName.animate({
    width:"400px",
    height:"200px",
    bottom:"300px"
  },2000);
};
$enterName.on("click",expandEnterName);


// Start - Victory Message



// End - Victory Message

// Start - update name and score with jQuery

$playerOneName = $("#playerOneName");
$playerOneScore = $("#playerOneScore");

$playerTwoName = $("#playerTwoName");
$playerTwoScore = $("#playerTwoScore");



// End - update name and score with jQuery
