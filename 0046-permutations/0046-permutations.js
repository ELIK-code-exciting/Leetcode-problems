/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const itog = [];
    const curr = [];
    const used = new Array(nums.length).fill(false); 

    function backtrack_46(){
        if(nums.length === curr.length){
            itog.push([...curr]);
            return;
        }

        for(let i = 0; i < nums.length; i++){
            if(!used[i]){
                curr.push(nums[i]);
                used[i] = true;

                backtrack_46();

                used[i] = false;
                curr.pop();
            }
        }
    }
    backtrack_46();
    return itog;
};