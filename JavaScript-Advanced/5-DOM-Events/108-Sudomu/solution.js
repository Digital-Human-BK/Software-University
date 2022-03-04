function solve() {
    const [checkBtn, clearBtn] = document.querySelectorAll('tfoot button');
    checkBtn.addEventListener('click', checkBoard);
    clearBtn.addEventListener('click', clearBoard);
    const table = document.getElementsByTagName('table')[0];
    const message = document.querySelector('#check p');

    const board = createBoard();
    let validRows = validateRows();
    let validColumns = validateColumns();
    let uniqueRows = testRows();

    function createBoard() {
        const board = []
        let row = [];
        Array.from(document.querySelectorAll('tbody input')).forEach((e, i) => {
            if ((i + 1) % 9 == 0) {
                row.push(e);
                board.push(row)
                row = [];
            } else {
                row.push(e);
            }
        });
        return board;
    }

    //test if every row has unique numbers
    function validateRows() {
        let isValidRows = true;
        board.forEach(row => {
            let set = new Set();
            row.forEach(el => {
                set.add(el.value);
            });
            if (set.size != 9) {
                isValidRows = false;
            }
        });
        return isValidRows;
    }

    //test if every column has unique numbers
    function validateColumns() {
        let isValidCols = true;
        for (let i = 0; i < board.length; i++) {
            let set = new Set();
            for (let c = 0; c < board.length; c++) {
                set.add(board[c][i].value);
            }
            if (set.size != 9) {
                isValidCols = false;
            }
        }
        return isValidCols;
    }

    //test if every row is unique
    function testRows(){
        let rows = []
        board.forEach(row => {
            let rowAsString = '';
            row.forEach(el => {
                rowAsString+=el.value;
            })
            rows.push(rowAsString);
        });
        

        let uniqueRows = new Set()
        rows.forEach(row => {
            uniqueRows.add(row);
        });
        
        if (uniqueRows.size == 9) {
            return true;
        } else {
            return false;
        }
    }

    //buttons functionality
    function checkBoard(ev) {
        if (validRows && validColumns && uniqueRows) {
            table.style.border = '2px solid green';
            message.textContent = 'You solve it! Congratulations!';
            message.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            message.textContent = 'NOP! You are not done yet...';
            message.style.color = 'red';
        }
    }

    function clearBoard(ev) {
        board.forEach(row => {
            row.forEach(el => {
                el.value = '';
            })
        });
        table.style.border = '';
        message.textContent = '';
        message.style.color = '';
    }
}