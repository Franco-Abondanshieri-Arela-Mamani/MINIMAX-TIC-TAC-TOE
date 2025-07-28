let minimaxStats = {
    maxDepth: 0,
    nodesEvaluated: 0,
    calculationTime: 0,
    bestScore: 0
};

function minimax(newBoard, depth, isMaximizing) {
    minimaxStats.nodesEvaluated++;
    minimaxStats.maxDepth = Math.max(minimaxStats.maxDepth, depth);

    const winner = checkWinnerForBoard(newBoard);
    if (winner === 'O') return { score: 10 - depth };
    if (winner === 'X') return { score: depth - 10 };
    if (newBoard.every(cell => cell !== '')) return { score: 0 };

    if (isMaximizing) {
        let bestScore = -Infinity;
        let bestMove = null;
        
        for (let i = 0; i < 9; i++) {
            if (newBoard[i] === '') {
                newBoard[i] = 'O';
                const score = minimax(newBoard, depth + 1, false).score;
                newBoard[i] = '';
                
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = i;
                }
            }
        }
        return { score: bestScore, index: bestMove };
    } else {
        let bestScore = Infinity;
        let bestMove = null;
        
        for (let i = 0; i < 9; i++) {
            if (newBoard[i] === '') {
                newBoard[i] = 'X';
                const score = minimax(newBoard, depth + 1, true).score;
                newBoard[i] = '';
                
                if (score < bestScore) {
                    bestScore = score;
                    bestMove = i;
                }
            }
        }
        return { score: bestScore, index: bestMove };
    }
}

function resetMinimaxStats() {
    minimaxStats = {
        maxDepth: 0,
        nodesEvaluated: 0,
        calculationTime: 0,
        bestScore: 0
    };
}