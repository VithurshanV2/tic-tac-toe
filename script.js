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

    return { getBoard };
}

function Cell() {
    let value = 0;

    const getValue = () => value;

    const setValue = (newValue) => {
        if (value === "") {
            value.newValue;
        }
    };

    return { getValue, setValue };
}

function Player(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;

    return { getName, getMarker };
}