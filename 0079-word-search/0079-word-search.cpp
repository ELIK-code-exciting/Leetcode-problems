class Solution {
public:
    bool backtrack_79(vector<vector<char>>& board, const string& word, int index, int x, int y) {
        if (index == word.size()) {
            return true;
        }

        if ( (x < 0 || x >= board.size() ) || (y < 0 || y >= board[x].size() ) || (board[x][y] != word[index])) {
            return false;
        }

        char vrem = board[x][y];
        board[x][y] = '#';

        bool found = backtrack_79(board, word, index + 1, x - 1, y) ||
                    backtrack_79(board, word, index + 1, x, y + 1) ||
                    backtrack_79(board, word, index + 1, x + 1, y) ||
                    backtrack_79(board, word, index + 1, x, y - 1);

        board[x][y] = vrem;

        return found;
    }
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size();
        int n = board[0].size();

        // Пробуем начать с каждой клетки
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (backtrack_79(board, word, 0, i, j)) {
                    return true;
                }
            }
        }
        return false;
    }
};