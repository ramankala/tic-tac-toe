
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

    let count = 0;



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

        render();   

    })();

    function placeMarker(e){


        if (playerArr[0].isActive == true){
            const location = e.target.getAttribute(`id`).slice(9).split("");
            if (gameBoard[location[0]][location[1]] == " " || (gameBoard[location[0]][location[1]] != playerArr[1].mark)) {
                gameBoard[location[0]][location[1]] = playerArr[0].mark;
                count += 1;
                playerArr[0].toggle();
                playerArr[1].toggle();
                console.log("player 1 "+playerArr[0].isActive);
                console.log("player 2 "+playerArr[1].isActive);

            }
            else {

            }

        }
        else if(playerArr[1].isActive == true) {
            const location = e.target.getAttribute(`id`).slice(9).split("");
            if (gameBoard[location[0]][location[1]] == " " || (gameBoard[location[0]][location[1]] != playerArr[0].mark)){
                gameBoard[location[0]][location[1]] = playerArr[1].mark;
                count += 1;
                playerArr[1].toggle();
                playerArr[0].toggle();
                console.log("player 1 "+playerArr[0].isActive);
                console.log("player 2 "+playerArr[1].isActive);
            }
            else {

            }
        }

        console.log(gameBoard);
        // console.log(count);
        clearBoard();
        render();
        gameOver();
        

        
        
    }

    function gameOver(){

        // console.log(gameBoard);

        if (gameBoard[0][0] == playerArr[0].mark && gameBoard[1][0] == playerArr[0].mark && gameBoard[2][0] == playerArr[0].mark ){
            console.log(`${playerArr[0].name} wins`);
        }
        else if (gameBoard[0][0] == playerArr[0].mark && gameBoard[0][1] == playerArr[0].mark && gameBoard[0][2] == playerArr[0].mark){
            console.log(`${playerArr[0].name} wins`);
        }
        else if (gameBoard[1][0] == playerArr[0].mark && gameBoard[1][1] == playerArr[0].mark && gameBoard[1][2] == playerArr[0].mark){
            console.log(`${playerArr[0].name} wins`);
        }
        else if (gameBoard[2][0] == playerArr[0].mark && gameBoard[2][1] == playerArr[0].mark && gameBoard[2][2] == playerArr[0].mark){
            console.log(`${playerArr[0].name} wins`);
        }
        else if (gameBoard[0][1] == playerArr[0].mark && gameBoard[1][1] == playerArr[0].mark && gameBoard[2][1] == playerArr[0].mark){
            console.log(`${playerArr[0].name} wins`);
        }
        else if (gameBoard[0][2] == playerArr[0].mark && gameBoard[1][2] == playerArr[0].mark && gameBoard[2][2] == playerArr[0].mark){
            console.log(`${playerArr[0].name} wins`);
        }
        else if (gameBoard[0][2] == playerArr[0].mark && gameBoard[1][1] == playerArr[0].mark && gameBoard[2][0] == playerArr[0].mark){
            console.log(`${playerArr[0].name} wins`);
        }
        else if (gameBoard[0][0] == playerArr[0].mark && gameBoard[1][1] == playerArr[0].mark && gameBoard[2][2] == playerArr[0].mark){
            console.log(`${playerArr[0].name} wins`);
        }
        else {
            if (gameBoard[0][0] == playerArr[1].mark && gameBoard[1][0] == playerArr[1].mark && gameBoard[2][0] == playerArr[1].mark ){
                console.log(`${playerArr[1].name} wins`);
            }
            else if (gameBoard[0][0] == playerArr[1].mark && gameBoard[0][1] == playerArr[1].mark && gameBoard[0][2] == playerArr[1].mark){
                console.log(`${playerArr[1].name} wins`);
            }
            else if (gameBoard[1][0] == playerArr[1].mark&& gameBoard[1][1] == playerArr[1].mark && gameBoard[1][2] == playerArr[1].mark){
                console.log(`${playerArr[1].name} wins`);
            }
            else if (gameBoard[2][0] == playerArr[1].mark && gameBoard[2][1] == playerArr[1].mark && gameBoard[2][2] == playerArr[1].mark){
                console.log(`${playerArr[1].name} wins`);
            }
            else if (gameBoard[0][1] == playerArr[1].mark && gameBoard[1][1] == playerArr[1].mark && gameBoard[2][1] == playerArr[1].mark){
                console.log(`${playerArr[1].name} wins`);
            }
            else if (gameBoard[0][2] == playerArr[1].mark && gameBoard[1][2] == playerArr[1].mark && gameBoard[2][2] == playerArr[1].mark){
                console.log(`${playerArr[1].name} wins`);
            }
            else if (gameBoard[0][2] == playerArr[1].mark && gameBoard[1][1] == playerArr[1].mark && gameBoard[2][0] == playerArr[1].mark){
                console.log(`${playerArr[1].name} wins`);
            }
            else if (gameBoard[0][0] == playerArr[1].mark && gameBoard[1][1] == playerArr[1].mark && gameBoard[2][2] == playerArr[1].mark){
                console.log(`${playerArr[1].name} wins`);
            }
        }

        if (count == 9){
            console.log("tie game");
        }

       
    }

    function clearBoard(){
        let parent = document.querySelector("#container");
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
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

            });
        });
    }



return {gameBoard, playerArr, render};
})();





