/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const itog = [];
    const curr = [];

    candidates.sort((a, b) => a - b);

    function backtrack_40(start, target){
        if(target === 0){
            itog.push([...curr]);
            return;
        }
        if(target < 0) return;

        for(let i = start; i < candidates.length; i++){
            if(i > start && candidates[i] === candidates[i-1]){
                continue;
            }
            if(candidates[i] > target) break;

            curr.push(candidates[i]);
            backtrack_40(i + 1, target - candidates[i]);

            curr.pop();
        }
    }
    backtrack_40(0, target);
    return itog;
};