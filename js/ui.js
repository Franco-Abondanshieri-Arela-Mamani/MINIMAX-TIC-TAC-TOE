function updateDisplay() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
        cell.className = 'cell';
        if (board[index]) {
            cell.classList.add(board[index].toLowerCase());
        }
        if (!gameActive) {
            cell.classList.add('disabled');
        }
    });
}

function updateStatus(message = null, isWinner = false) {
    const status = document.getElementById('status');
    status.classList.remove('winner');
    
    if (message) {
        status.textContent = message;
        if (isWinner) {
            status.classList.add('winner');
        }
    } else if (gameActive) {
        if (minimaxActive && currentPlayer === 'O') {
            status.textContent = 'Minimax pensando...';
        } else {
            status.textContent = currentPlayer === 'X' ? 'Tu turno (X)' : 'Turno de O';
        }
    }
}

function updateMinimaxInfo() {
    document.getElementById('maxDepth').textContent = minimaxStats.maxDepth;
    document.getElementById('nodesEvaluated').textContent = minimaxStats.nodesEvaluated;
    document.getElementById('calculationTime').textContent = minimaxStats.calculationTime + 'ms';
    document.getElementById('bestScore').textContent = minimaxStats.bestScore;
}

function toggleReport() {
    const info = document.getElementById('minimaxInfo');
    info.classList.toggle('hidden');
}

function hideMinimaxInfo() {
    document.getElementById('minimaxInfo').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    updateStatus();
});