function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const setCell = (row, col, marker) => {
        board[row][col].setValue(marker);
    };
    return { getBoard, setCell };
}

function Cell() {
    let value = "";

    const getValue = () => value;

    const setValue = (newValue) => {
        if (value === "") {
            value = newValue;
        }
    };

    return { getValue, setValue };
}

function Player(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;

    return { getName, getMarker };
}

function GameController() {
    const player1 = Player("Player 1", "X");
    const player2 = Player("Player 2", "O");
    const board = Gameboard();

    let currentPlayer = player1;

    function playRound(row, col) {
        const marker = currentPlayer.getMarker();

        board.setCell(row, col, marker);

        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
}