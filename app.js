
const Player = (name, mark, isActive= false) => {
    const sayName = () => console.log(`my name is ${name} and my mark is ${mark}.`)

    toggle(){
        isActive = !isActive;
    }

    return {name, mark, isActive, sayName};
};

const gameBoard = (() => {

    const firstRow = document.createElement('div');
    firstRow.setAttribute("id", "firstRow");
    const secondRow = document.createElement('div');
    secondRow.setAttribute("id", "secondRow");
    const thirdRow = document.createElement('div');
    thirdRow.setAttribute("id", "thirdRow");

    let squareDiv;

    const playerArr = [
        Player("raman", "x")
    ];


    let board = [
        (["X", "O", "X"]),
        (["X", "O", "O"]),
        (["O", "X", "O"])
    ]



    const displayController =(() => {
        // DOM Manipulation stuff goes here, refer to ODIN lesson if you forget
        // Appending probably goes in the render function, just worry about DOM creation first
        // createBoard is returned making it available to use, can use it here for DOM
        // Run a for loop on the board and create a div for each entry
        // display each div and put styles
        // can toggle player active status
        // create attribute to toggle player's status, either here(most likely this) or in gameBoard



        board.forEach(function(item, index, array){
            item.forEach(function(subitem, subindex, subarray){
                

                squareDiv = document.createElement("div");
                squareDiv.setAttribute("id", `squareDiv${index}${subindex}`);
                squareDiv.textContent = subitem;
                // console.log(squareDiv);

                renderRow(squareDiv);

                render(firstRow);
                render(secondRow);
                render(thirdRow);

            });
        });

        

    })();

    function renderRow(div){



        if (div.getAttribute("id") == "squareDiv00" || div.getAttribute("id") == "squareDiv01" || div.getAttribute("id") == "squareDiv02"){
            firstRow.appendChild(div);
        }
        else if(div.getAttribute("id") == "squareDiv10" || div.getAttribute("id") == "squareDiv11" || div.getAttribute("id") == "squareDiv12"){
            secondRow.appendChild(div);
        }
        else {
            thirdRow.appendChild(div);
        }



    }

    function render(div) {

        const container = document.querySelector('#container');

        container.appendChild(div);
    }

    // playerArr.forEach(function(item, index, array){
    //     console.log(item);
    // })


return {board, playerArr, render};
})();





