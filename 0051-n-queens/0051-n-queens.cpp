class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> result;
        vector<string> board(n, string(n, '.'));
        
        vector<bool> cols(n, false);               // col ∈ [0, n)
        vector<bool> diag1(2 * n - 1, false);      // row - col + (n - 1) ∈ [0, 2n-2]
        vector<bool> diag2(2 * n - 1, false);      // row + col ∈ [0, 2n-2]

        backtrack(0, n, board, result, cols, diag1, diag2);
        return result;
    }

private:
    void backtrack(int row, int n, vector<string>& board,
                   vector<vector<string>>& result,
                   vector<bool>& cols,
                   vector<bool>& diag1,
                   vector<bool>& diag2) {
        if (row == n) {
            result.push_back(board);
            return;
        }

        for (int col = 0; col < n; ++col) {
            int d1 = row - col + (n - 1);  // смещение, чтобы индекс ≥ 0
            int d2 = row + col;

            if (cols[col] || diag1[d1] || diag2[d2]) {
                continue;
            }

            // Ставим ферзя
            board[row][col] = 'Q';
            cols[col] = diag1[d1] = diag2[d2] = true;

            backtrack(row + 1, n, board, result, cols, diag1, diag2);

            // Backtrack
            board[row][col] = '.';
            cols[col] = diag1[d1] = diag2[d2] = false;
        }
    }
};