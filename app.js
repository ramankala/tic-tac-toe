
const Player = (name, mark, isActive= false) => {

    let state = {
        name,
        mark,
        isActive,
    }
    

    // const toggle = () => {
    //     isActive = !isActive;
    //     console.log(isActive);
        
    // }

    // return {name, mark, isActive, toggle(){ isActive = !isActive; }};
    return {
        get name(){ return state.name; },
        get mark(){ return state.mark },
        get isActive(){ return state.isActive },
        toggle(){ state.isActive = !state.isActive; }
    }
};


const game = (() => {



    const playerArr = [
        Player("raman", "X", true),
        Player("namar", "O", false)
    ];


    let gameBoard = [
        (["X", "O", "X"]),
        (["X", "O", "O"]),
        (["O", "X", "O"])
    ]

        // console.log(playerArr[0].isActive);
        // playerArr[0].toggle();
        // console.log(playerArr[0].isActive);


    const displayController =(() => {

        // DOM Manipulation stuff goes here, refer to ODIN lesson if you forget
        // Appending probably goes in the render function, just worry about DOM creation first
        // createBoard is returned making it available to use, can use it here for DOM
        // Run a for loop on the board and create a div for each entry
        // display each div and put styles
        // can toggle player active status
        // create attribute to toggle player's status, either here(most likely this) or in gameBoard



        // gameBoard.forEach(function(item, index, array){
        //     item.forEach(function(subitem, subindex, subarray){
                

        //         squareDiv = document.createElement("div");
        //         squareDiv.setAttribute("id", `squareDiv${index}${subindex}`);
        //         squareDiv.textContent = subitem;
        // //         // console.log(squareDiv);

        //         // squareDiv.addEventListener('click', placeMarker);

        // //         renderRow(squareDiv);

        // //         render(firstRow);
        // //         render(secondRow);
        // //         render(thirdRow);
        

        //     });
        // });



        
        

        render();


        

        

    })();

    function placeMarker(e){


        if (playerArr[0].isActive == true){
            const location = e.target.getAttribute(`id`).slice(9).split("");
            gameBoard[location[0]][location[1]] = playerArr[0].mark;
            playerArr[0].toggle();
            playerArr[1].toggle();
            console.log("player 1 "+playerArr[0].isActive);
            console.log("player 2 "+playerArr[1].isActive);
        }
        else if(playerArr[1].isActive == true) {
            const location = e.target.getAttribute(`id`).slice(9).split("");
            gameBoard[location[0]][location[1]] = playerArr[1].mark;
            playerArr[1].toggle();
            playerArr[0].toggle();
            console.log("player 1 "+playerArr[0].isActive);
            console.log("player 2 "+playerArr[1].isActive);
        }

        console.log(gameBoard);
        clearBoard();

        render();

        
        
    }

    function clearBoard(){
        let parent = document.querySelector("#container");
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
            console.log("hi");
        }

        // render();
    }

    // function renderRow(div){



    //     // if (div.getAttribute("id") == "squareDiv00" || div.getAttribute("id") == "squareDiv01" || div.getAttribute("id") == "squareDiv02"){
    //     //     firstRow.appendChild(div);
    //     // }
    //     // else if(div.getAttribute("id") == "squareDiv10" || div.getAttribute("id") == "squareDiv11" || div.getAttribute("id") == "squareDiv12"){
    //     //     secondRow.appendChild(div);
    //     // }
    //     // else {
    //     //     thirdRow.appendChild(div);
    //     // }



    // }

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

        // container.appendChild(div);
    }

    // playerArr.forEach(function(item, index, array){
    //     console.log(item);
    // })


return {gameBoard, playerArr, render};
})();





