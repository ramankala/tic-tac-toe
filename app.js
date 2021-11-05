const gameBoard = (() => {
    function createBoard(){

        const board = [
            (" ", " ", " "),
            (" ", " ", " "),
            (" ", " ", " ")
        ]
        console.log(board);
    }
    return {createBoard};
})();

const Player = (name, marks) => {
    const sayName = () => console.log(`my name is ${name} and my mark is ${marks}.`)

    return {name, marks, sayName};
}

gameBoard.createBoard();