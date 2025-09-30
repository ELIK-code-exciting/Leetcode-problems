/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;

    function backtrack_79(index,x,y){
        if(index === word.length){
            return true;
        }

        if(x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] !== word[index]){
            return false;
        }

        var vrem = board[x][y];
        board[x][y] = '#';

        var found = backtrack_79(index + 1, x + 1, y) || backtrack_79(index + 1, x, y + 1) || backtrack_79(index + 1, x - 1, y) || backtrack_79(index + 1, x, y - 1);

        board[x][y] = vrem;
        return found;
    }


    for(let x = 0; x < m; x++){
        for(let y = 0; y < n; y++){
            if(backtrack_79(0, x, y)){
                return true;
            }
        }
    }
    return false;
};