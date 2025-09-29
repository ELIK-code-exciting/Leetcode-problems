class Solution {
    public boolean backtrack_79(char[][] board, String word, int index, int x, int y){
        if(index == word.length()){
            return true;
        }

        if(x < 0 || x >= board.length || y < 0 || y >= board[0].length || word.charAt(index) != board[x][y]) {
            return false;
        }

        char vrem = board[x][y];
        board[x][y] = '#';

        boolean found = backtrack_79(board, word, index + 1, x + 1, y) ||
                    backtrack_79(board, word, index + 1, x - 1, y) ||
                    backtrack_79(board, word, index + 1, x, y + 1) ||
                    backtrack_79(board, word, index + 1, x, y - 1);

        board[x][y] = vrem;
        return found;
    }

    public boolean exist(char[][] board, String word) {
        int m = board.length;
        int n = board[0].length;

        for(int x = 0; x < m; x++){
            for(int y = 0; y < n; y++){
                if(backtrack_79(board, word, 0, x, y)){
                    return true;
                }
            }
        }
        return false;
    }
}