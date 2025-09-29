/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const itog = [];
    const curr = [];

    function backtrack_78(start){
        itog.push([...curr]);

        for(let i = start; i < nums.length; i++){
            curr.push(nums[i]);

            backtrack_78(i + 1);

            curr.pop();
        }
    }

    backtrack_78(0);
    return itog;
};