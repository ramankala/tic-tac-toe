
const Player = (name, mark, isActive= false) => {

    let state = {
        name,
        mark,
        isActive,
    }
    
    return {
        get name(){ return state.name; },
        get mark(){ return state.mark; },
        get isActive(){ return state.isActive; },
        toggle(){ state.isActive = !state.isActive; }
    }
};


const game = (() => {

    let player1;
    let player2;


    const playerArr = [
        Player("raman", "X", true),
        Player("namar", "O", false)
    ];


    let gameBoard = [
        ([" ", " ", " "]),
        ([" ", " ", " "]),
        ([" ", " ", " "])
    ]



    const displayController =(() => { 

        addPlayers();

        render();


    })();


    function placeMarker(e){


        if (playerArr[0].isActive == true){
            const location = e.target.getAttribute(`id`).slice(9).split("");
            if (gameBoard[location[0]][location[1]] == " " || (gameBoard[location[0]][location[1]] != playerArr[1].mark)) {
                gameBoard[location[0]][location[1]] = playerArr[0].mark;
                playerArr[0].toggle();
                playerArr[1].toggle();

            }
            else {

            }

        }
        else if(playerArr[1].isActive == true) {
            const location = e.target.getAttribute(`id`).slice(9).split("");
            if (gameBoard[location[0]][location[1]] == " " || (gameBoard[location[0]][location[1]] != playerArr[0].mark)){
                gameBoard[location[0]][location[1]] = playerArr[1].mark;
                playerArr[1].toggle();
                playerArr[0].toggle();
            }
            else {

            }
        }

        clearBoard();
        render();
        gameOver();
        

        
        
    }

    function gameOver(){

        let p1Win = false;
        let p2Win = false;
        let fullBoard = 0;


        if (gameBoard[0][0] == playerArr[0].mark && gameBoard[1][0] == playerArr[0].mark && gameBoard[2][0] == playerArr[0].mark ){

            p1Win = true; 
            winnerMessage(p1Win, p2Win, fullBoard);
        }
        else if (gameBoard[0][0] == playerArr[0].mark && gameBoard[0][1] == playerArr[0].mark && gameBoard[0][2] == playerArr[0].mark){

            p1Win = true; 
            winnerMessage(p1Win, p2Win, fullBoard);
        }
        else if (gameBoard[1][0] == playerArr[0].mark && gameBoard[1][1] == playerArr[0].mark && gameBoard[1][2] == playerArr[0].mark){

            p1Win = true; 
            winnerMessage(p1Win, p2Win, fullBoard);
        }
        else if (gameBoard[2][0] == playerArr[0].mark && gameBoard[2][1] == playerArr[0].mark && gameBoard[2][2] == playerArr[0].mark){

            p1Win = true; 
            winnerMessage(p1Win, p2Win, fullBoard);
        }
        else if (gameBoard[0][1] == playerArr[0].mark && gameBoard[1][1] == playerArr[0].mark && gameBoard[2][1] == playerArr[0].mark){

            p1Win = true; 
            winnerMessage(p1Win, p2Win, fullBoard);
        }
        else if (gameBoard[0][2] == playerArr[0].mark && gameBoard[1][2] == playerArr[0].mark && gameBoard[2][2] == playerArr[0].mark){

            p1Win = true; 
            winnerMessage(p1Win, p2Win, fullBoard);
        }
        else if (gameBoard[0][2] == playerArr[0].mark && gameBoard[1][1] == playerArr[0].mark && gameBoard[2][0] == playerArr[0].mark){

            p1Win = true; 
            winnerMessage(p1Win, p2Win, fullBoard);
        }
        else if (gameBoard[0][0] == playerArr[0].mark && gameBoard[1][1] == playerArr[0].mark && gameBoard[2][2] == playerArr[0].mark){

            p1Win = true; 
            winnerMessage(p1Win, p2Win, fullBoard);
        }
        else {
            if (gameBoard[0][0] == playerArr[1].mark && gameBoard[1][0] == playerArr[1].mark && gameBoard[2][0] == playerArr[1].mark ){
 
                p2Win = true;
                winnerMessage(p1Win, p2Win, fullBoard);
            }
            else if (gameBoard[0][0] == playerArr[1].mark && gameBoard[0][1] == playerArr[1].mark && gameBoard[0][2] == playerArr[1].mark){

                p2Win = true;
                winnerMessage(p1Win, p2Win, fullBoard);
            }
            else if (gameBoard[1][0] == playerArr[1].mark && gameBoard[1][1] == playerArr[1].mark && gameBoard[1][2] == playerArr[1].mark){

                p2Win = true;
                winnerMessage(p1Win, p2Win, fullBoard);
            }
            else if (gameBoard[2][0] == playerArr[1].mark && gameBoard[2][1] == playerArr[1].mark && gameBoard[2][2] == playerArr[1].mark){

                p2Win = true;
                winnerMessage(p1Win, p2Win, fullBoard);
            }
            else if (gameBoard[0][1] == playerArr[1].mark && gameBoard[1][1] == playerArr[1].mark && gameBoard[2][1] == playerArr[1].mark){

                p2Win = true;
                winnerMessage(p1Win, p2Win, fullBoard);
            }
            else if (gameBoard[0][2] == playerArr[1].mark && gameBoard[1][2] == playerArr[1].mark && gameBoard[2][2] == playerArr[1].mark){

                p2Win = true;
                winnerMessage(p1Win, p2Win, fullBoard);
            }
            else if (gameBoard[0][2] == playerArr[1].mark && gameBoard[1][1] == playerArr[1].mark && gameBoard[2][0] == playerArr[1].mark){

                p2Win = true;
                winnerMessage(p1Win, p2Win, fullBoard);
            }
            else if (gameBoard[0][0] == playerArr[1].mark && gameBoard[1][1] == playerArr[1].mark && gameBoard[2][2] == playerArr[1].mark){

                p2Win = true;
                winnerMessage(p1Win, p2Win, fullBoard);
            }

        }

        gameBoard.forEach(function(item, array, index){
            item.forEach(function(subitem, subarray, subindex){
                if (subitem == playerArr[0].mark || subitem == playerArr[1].mark){
                    fullBoard += 1;
                }
            });
        });

        if (p1Win == false && p2Win == false && fullBoard == 9){

            winnerMessage(p1Win, p2Win, fullBoard)
        }
 
    }

    function clearBoard(){
        let parent = document.querySelector("#container");
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function resetBoard(){

        window.location.reload();

    }


    function addPlayers(){

        let display = document.querySelector("#display");

        player1 = window.prompt("Enter name of player 1:");
        player2 = window.prompt("Enter name of player 2:");

        if (player1 == null) {
            player1 = "Player 1";
        }
        if (player2 == null){
            player2 = "Player 2";
        }

        display.textContent = player1 + " vs " + player2;
        
        
    }

    function winnerMessage(p1Win, p2Win, fullBoard){
        let display = document.querySelector("#display");

        if (p1Win == true){
            display.textContent = player1 + " wins!";
        }
        else if (p2Win == true){
            display.textContent = player2 + " wins!";
        }

        else if (p1Win == false && p2Win == false && fullBoard == 9){
            display.textContent = "Tie Game!";
        }
        
    }



    function render() {


        let firstRow = document.createElement('div');
        firstRow.setAttribute("id", "firstRow");
        let secondRow = document.createElement('div');
        secondRow.setAttribute("id", "secondRow");
        let thirdRow = document.createElement('div');
        thirdRow.setAttribute("id", "thirdRow");
    
        let squareDiv;

        const resetBtn = document.querySelector('#resetBtn');

        const container = document.querySelector('#container');


        gameBoard.forEach(function(item, index, array){
            item.forEach(function(subitem, subindex, subarray){
                squareDiv = document.createElement("div");
                squareDiv.setAttribute("id", `squareDiv${index}${subindex}`);
                squareDiv.textContent = subitem;
                
                squareDiv.addEventListener('click', placeMarker);
                

                if (squareDiv.getAttribute("id") == "squareDiv00" || squareDiv.getAttribute("id") == "squareDiv01" || squareDiv.getAttribute("id") == "squareDiv02"){
                    firstRow.appendChild(squareDiv);
                }
                else if(squareDiv.getAttribute("id") == "squareDiv10" || squareDiv.getAttribute("id") == "squareDiv11" || squareDiv.getAttribute("id") == "squareDiv12"){
                    secondRow.appendChild(squareDiv);
                }
                else if (squareDiv.getAttribute("id") == "squareDiv20" || squareDiv.getAttribute("id") == "squareDiv21" || squareDiv.getAttribute("id") == "squareDiv22"){
                    thirdRow.appendChild(squareDiv);
                }


                container.appendChild(firstRow);
                container.appendChild(secondRow);
                container.appendChild(thirdRow);


                resetBtn.addEventListener('click', resetBoard);



            });
        });
    }



// return {gameBoard, playerArr, render};
})();





