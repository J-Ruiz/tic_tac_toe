
let gameboard = ["X","","X","O","","O","X","","X"];

let createGameboard = () => {
    //create gameboard boxes from array
    for(let i = 0; i<gameboard.length; i++){
        let newBox = document.createElement("div");
        newBox.setAttribute("class", "gamebox")
        newBox.innerHTML = gameboard[i];
        newBox.addEventListener("click", ()=>{
            //execute addIconToGameBoard() Function
            //remove eventListener
        })
        document.getElementById("gameboard").appendChild(newBox);
    }
};


let playerTurnSwitcher = () => {
    //if it was player 1's turn
        // make inner HTML = Player 2's turn
    //else 
        // make inner HTML = Player 1's turn
};

let addIconToGameboard = () => {
    // if player 1's turn and clicks gameboard box
        // find player 1's icon
        // set array gameboard[index]  = player 1's icon
        // execute the playerTurnSwitcher function

    // else 
        // find player 2's icon
        // set array gameboard[index]  = player 2's icon
        // execute the playerTurnSwitcher function

};

let updateScore = () => {
    // if player 1 got 3 in a row
        // add 1 to player 1's score
    // else
        // add 1 to player 2's score
};


let clearGameBoard = () => {
    // while (#gameboard.firstChild){
    //  #gameboard.removeChild(#gameboard.firstChild)
    // }
}

let gameWin = () => {
    //if (there are 3 in a row horizontally, vertically or diagonally)
        // identify the token that did it
        // search for the player with that token
        // if (player 1)
            // have a pop up on screen stating player 1 wins
            //else 
            // popup with player 2 wins 
        //execute the clearGameBoard() function
}