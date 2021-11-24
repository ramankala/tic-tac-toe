
const Player = (name, mark) => {
    const sayName = () => console.log(`my name is ${name} and my mark is ${mark}.`)

    return {name, mark, sayName};
};

const gameBoard = (() => {

    const playerArr = [
        Player("raman", "x")
    ];


    const board = [
        (" ", " ", " "),
        (" ", " ", " "),
        (" ", " ", " ")
    ]


    const displayController =(() => {
        // DOM Manipulation stuff goes here, refer to ODIN lesson if you forget
        // Appending probably goes in the render function, just worry about DOM creation first
        // createBoard is returned making it available to use, can use it here for DOM
        // Run a for loop on the board and create a div for each entry
        // display each div and put styles
        // can toggle player active status
        // create attribute to toggle player's status, either here(most likely this) or in gameBoard

        const container = document.querySelector('#container');

        board.forEach(function(item, index, array){
            squareDiv = document.createElement("div");
            squareDiv.setAttribute("id", "squareDiv");
        });


    })();

    // playerArr.forEach(function(item, index, array){
    //     console.log(item);
    // })


return {board, playerArr};
})();




