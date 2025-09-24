class Solution {
    public static void backtrack_51(int row, int n, char[][] board, List<List<String>> result, boolean[] cols, boolean[] diag1, boolean[] diag2){
        if(row == n){
            List<String> solution = new ArrayList<>();
            for (char[] r : board) {
                solution.add(new String(r));
            }
            result.add(solution);
            return;
        }
        for(int col = 0; col < n; col++){
            int d1 = row - col + (n - 1);
            int d2 = row + col;

            if (cols[col] || diag1[d1] || diag2[d2]) {
                    continue;
            }

            board[row][col] = 'Q';
            cols[col] = diag1[d1] = diag2[d2] = true;

            backtrack_51(row + 1, n, board, result, cols, diag1, diag2);

            board[row][col] = '.';
            cols[col] = diag1[d1] = diag2[d2] = false;
        }
        
    }
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> itog = new ArrayList<>();
        char[][] board = new char[n][n];

        for (int i = 0; i < n; i++) {
            Arrays.fill(board[i], '.');
        }

        boolean[] cols = new boolean[n];
        boolean[] diag1 = new boolean[2 * n - 1]; // row - col + (n - 1)
        boolean[] diag2 = new boolean[2 * n - 1]; // row + col

        backtrack_51(0, n, board, itog, cols, diag1, diag2);
        return itog;
    }
}