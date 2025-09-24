class Solution {
public:
    void backtrack_51(vector<vector<string>>& itog, vector<string>& board, unordered_set<int>& cols, unordered_set<int>& diags1, unordered_set<int>& diags2, int n, int row) {
        if (row == n) {
            itog.push_back(board);
            return;
        }

        for (int col = 0; col < n; col++) {
            int d1 = row - col;
            int d2 = row + col;

            if (cols.count(col) || diags1.count(d1) || diags2.count(d2)) {
                continue;
            }

            board[row][col] = 'Q';
            cols.insert(col);
            diags1.insert(d1);
            diags2.insert(d2);

            backtrack_51(itog, board, cols, diags1, diags2, n, row + 1);

            board[row][col] = '.';
            cols.erase(col);
            diags1.erase(d1);
            diags2.erase(d2);
        }
    }
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> itog;
        vector<string> board (n, string(n, '.'));
        unordered_set<int> cols;
        unordered_set<int> diags1;
        unordered_set<int> diags2;
        backtrack_51(itog, board, cols, diags1, diags2, n, 0);
        return itog;
    }
};