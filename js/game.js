let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let minimaxActive = false;

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function makeMove(cellIndex) {
    if (board[cellIndex] !== '' || !gameActive) return;

    board[cellIndex] = currentPlayer;
    updateDisplay();

    if (checkWinner()) {
        updateStatus(`${currentPlayer} gana!`, true);
        gameActive = false;
        return;
    }

    if (board.every(cell => cell !== '')) {
        updateStatus('Empate!');
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();

    if (minimaxActive && currentPlayer === 'O' && gameActive) {
        setTimeout(() => {
            makeMinimaxMove();
        }, 500);
    }
}

function makeMinimaxMove() {
    const startTime = performance.now();
    resetMinimaxStats();
    
    const bestMove = minimax(board, 0, false);
    const endTime = performance.now();
    
    minimaxStats.calculationTime = Math.round(endTime - startTime);
    minimaxStats.bestScore = bestMove.score;
    
    if (bestMove.index !== null) {
        board[bestMove.index] = 'O';
        updateDisplay();
        updateMinimaxInfo();

        if (checkWinner()) {
            updateStatus('O gana!', true);
            gameActive = false;
            return;
        }

        if (board.every(cell => cell !== '')) {
            updateStatus('Empate!');
            gameActive = false;
            return;
        }

        currentPlayer = 'X';
        updateStatus();
    }
}

function checkWinner() {
    return checkWinnerForBoard(board);
}

function checkWinnerForBoard(boardState) {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a];
        }
    }
    return null;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    updateDisplay();
    updateStatus();
    hideMinimaxInfo();
}

function toggleMinimax() {
    minimaxActive = !minimaxActive;
    const btn = document.getElementById('minimaxBtn');
    const reportBtn = document.getElementById('reportBtn');
    
    if (minimaxActive) {
        btn.textContent = 'Desactivar Minimax';
        reportBtn.classList.remove('hidden');
    } else {
        btn.textContent = 'Activar Minimax';
        reportBtn.classList.add('hidden');
        hideMinimaxInfo();
    }
    
    resetGame();
}