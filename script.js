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
    };

    function checkWinner() {
        const cells = board.getBoard();
        const get = (row, column) => cells[row][column].getValue();

        // check rows and columns
        for (let i = 0; i < 3; i++) {
            // row check
            if (get(i, 0) !== "" && get(i, 0) === get(i, 1) && get(i, 1) === get(i, 2)) {
                return get(i, 0);
            }

            // column check
            if (get(0, i) !== "" && get(0, i) === get(1, i) && get(1, i) === get(2, i)) {
                return get(0, i);
            }
        }

        // diagonals check
        if (get(0, 0) !== "" && get(0, 0) === get(1, 1) && get(1, 1) === get(2, 2)) {
            return get(0, 0);
        }

        if (get(0, 2) !== "" && get(0, 2) === get(1, 1) && get(1, 1) === get(2, 0)) {
            return get(0, 2);
        }

        return null;
    }

    function isDraw() {
        const cells = board.getBoard();

        for (let i = 0; i < cells.length; i++) {
            for (let j = 0; j < cells[i].length; j++) {
                if (cells[i][j].getValue() === "") {
                    return false;
                }
            }
        }

        return checkWinner() === null;
    }

    function getBoard() {
        return board.getBoard();
    }

    return { playRound, getBoard, checkWinner, isDraw };
}