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

gameBoard.createBoard();