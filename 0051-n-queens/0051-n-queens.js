/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    
    const cols = Array(n).fill(false);
    const diag1 = Array(2 * n - 1).fill(false); // row - col + (n - 1)
    const diag2 = Array(2 * n - 1).fill(false); // row + col
    
    function backtrack(row) {
        if (row === n) {
            // Копируем текущую доску как массив строк
            result.push(board.map(r => r.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            const d1 = row - col + (n - 1);
            const d2 = row + col;
            
            if (cols[col] || diag1[d1] || diag2[d2]) {
                continue;
            }
            
            // Ставим ферзя
            board[row][col] = 'Q';
            cols[col] = diag1[d1] = diag2[d2] = true;
            
            backtrack(row + 1);
            
            // Backtrack
            board[row][col] = '.';
            cols[col] = diag1[d1] = diag2[d2] = false;
        }
    }
    
    backtrack(0);
    return result;
};