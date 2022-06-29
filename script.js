let startGameButton = document.getElementById("start-game-button");
startGameButton.addEventListener("click", ()=>{
    //change player 1 name
    document.getElementById("P1-name-display").innerHTML = document.getElementById("player-1-name").value
    //change player 2 name 
    document.getElementById("P2-name-display").innerHTML = document.getElementById("player-2-name").value
    document.getElementById("enter-your-name").style.visibility = "hidden";
    document.getElementById("reset-button").style.visibility = "visible";
    document.getElementById("turn-marker").innerHTML = document.getElementById("player-1-name").value + "'s Turn!";
    ticTacToe();
});



   

const ticTacToe = () => {
    let gameboard =  ["","","","","","","","",""];
    
    let whoseTurnIsIt = "1";

    let player1Score = 0;

    let player2Score = 0;

    let numberOfClicks = 0;
    
    let resetScore = () =>{
        document.getElementById("P1-score").innerHTML=player1Score;
        document.getElementById("P2-score").innerHTML=player2Score;
    }

    let updateScore = (winningPlayer) => {
        // if winning player is player1
        if(winningPlayer == "1"){
            player1Score++;
            document.getElementById("P1-score").innerHTML = player1Score;
        }
            
        // else
        else{
            player2Score++;
            document.getElementById("P2-score").innerHTML = player2Score;
        }
};

    let resetButton = (() => {
        let reset = document.getElementById("reset-button");
        reset.addEventListener("click", ()=>{
            clearGameBoard();
            player1Score = 0;
            player2Score = 0;
            resetScore();
            whoseTurnIsIt="1";
            document.getElementById("enter-your-name").style.visibility = "visible";
            reset.style.visibility = "hidden";
        })
    })();

    let clearGameBoard = () => {
        // while (#gameboard.firstChild){
        //  #gameboard.removeChild(#gameboard.firstChild)
        // }
        
        document.getElementById("gameboard").innerHTML= "";
        gameboard = ["","","","","","","","",""];
    }


    let gameWin = () => {
        //if (there are 3 in a row horizontally, vertically or diagonally)
        let topRow = [gameboard[0],gameboard[1],gameboard[2]];
        let middleRow = [gameboard[3],gameboard[4],gameboard[5]];
        let bottomRow = [gameboard[6],gameboard[7],gameboard[8]];
        let leftColumn = [gameboard[0],gameboard[3],gameboard[6]];
        let middleColumn = [gameboard[1],gameboard[4],gameboard[7]];
        let rightColumn = [gameboard[2],gameboard[5],gameboard[8]];
        let Diagonal1 = [gameboard[0],gameboard[4],gameboard[8]];
        let Diagonal2 = [gameboard[2],gameboard[4],gameboard[6]];

        let winningArray = [topRow,middleRow,bottomRow,leftColumn,middleColumn,rightColumn,Diagonal1,Diagonal2]

        for(let i = 0; i<winningArray.length; i++){
            let possibleWin = [];
            for(let j = 0; j<winningArray[i].length; j++){
                possibleWin.push(winningArray[i][j]);
                
            }

            function xTest(value){
                return value=="X";
            }

            function oTest(value){
                return value=="O";
            }

            console.log("array with every value" , possibleWin,possibleWin.every(xTest));

            if(possibleWin.every(xTest)){
                let player1Win = document.getElementById("P1-name-display").innerHTML;
                alert(`${player1Win} Wins!`)
                updateScore("1");
                clearGameBoard();
                playerTurnSwitcher()
                numberOfClicks=0;
                createGameboard();
                return;
            }

            else if(possibleWin.every(oTest)){
                let player2Win = document.getElementById("P2-name-display").innerHTML;
                alert(`${player2Win} Wins!`)
                updateScore("2");
                clearGameBoard();
                numberOfClicks=0;
                createGameboard();
                return;
            }
    
        }
        if(numberOfClicks == 9){
            alert("Tie Game! Try Again")
            playerTurnSwitcher();
            clearGameBoard();
            numberOfClicks=0;
            createGameboard();
            return;
        }
        return;
    };

    let playerTurnSwitcher = () => {
        //if it was player 1's turn
        // make inner HTML = Player 2's turn
        // update variable whoseTurnIsIt="2"
        if(whoseTurnIsIt == "1"){
            document.getElementById("turn-marker").innerHTML = document.getElementById("P2-name-display").innerHTML + "'s Turn!"
            whoseTurnIsIt = "2"
        }
        
        //else 
            // make inner HTML = Player 1's turn
            // update variable whoseTurnIsIt="1"
        else{
            document.getElementById("turn-marker").innerHTML = document.getElementById("P1-name-display").innerHTML + "'s Turn!"
            whoseTurnIsIt = "1"
        }
        
    };

    let addIconToGameboard = (clickedElement) => {
        // if player 1's turn and player 1 clicks gameboard box 
            
        if(whoseTurnIsIt == "1"){
                // array gameboard[clickedElement.target.id] = X.
            if(gameboard[Number(clickedElement.target.id)] == ""){
                gameboard[Number(clickedElement.target.id)] = "X";
                // add X to innerHTML of clicked element
                clickedElement.target.innerHTML = gameboard[Number(clickedElement.target.id)]
                    // execute the playerTurnSwitcher() function
                numberOfClicks++;
                gameWin();
                playerTurnSwitcher();
            }
        }
            
        // else 
        else if (gameboard[Number(clickedElement.target.id)] == ""){
                // array gameboard[clickedElement.target.id] = O.
            gameboard[Number(clickedElement.target.id)] = "O";
                // add O to innerHTML of clicked element
            clickedElement.target.innerHTML = gameboard[Number(clickedElement.target.id)]
                // execute the playerTurnSwitcher function
            numberOfClicks++;
            gameWin();
            playerTurnSwitcher();
        }
            
    };

    let createGameboard = () => {
        //create gameboard boxes from array
        for(let i = 0; i<gameboard.length; i++){
            let newBox = document.createElement("div");
            newBox.setAttribute("class", "gamebox")
            newBox.setAttribute("id", `${i}`)
            newBox.innerHTML = gameboard[i];


            newBox.addEventListener("click", function listener(event){
                //execute addIconToGameBoard(event) Function with event data as a parameter
                addIconToGameboard(event);
                //remove eventListener
                //newBox.removeEventListener("click", listener)
            })
            document.getElementById("gameboard").appendChild(newBox);
        }
    };

    createGameboard();

}




