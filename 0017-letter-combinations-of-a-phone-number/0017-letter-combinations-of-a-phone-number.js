/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0){
        return [];
    }
    var itog = [];
    var curr = "";
    var umap = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '7': "pqrs",
        '6': "mno",
        '8': "tuv",
        '9': "wxyz"
    };
    var backtrack_17 = function(key, digits){
        if(curr.length === digits.length){
            itog.push(curr);
            return;
        }
        
        for(let j = 0; j < umap[digits[key]].length; j++){
            curr += umap[digits[key]][j];

            backtrack_17(key + 1, digits);

            curr = curr.slice(0, -1);
        }
    }

    backtrack_17(0, digits);
    return itog;
};