class Solution {
public:
    void backtrack_40(vector<vector<int>>& itog, vector<int>& curr, vector<int> nums, int start, int target){
        if(target == 0){
            itog.push_back(curr);
            return;
        }
        if(target < 0){
            return;
        }

        for(int i = start; i < nums.size(); i++){
            if(i > start && nums[i] == nums[i-1]){
                continue;
            }

            if(nums[i] > target){
                return;
            }

            curr.push_back(nums[i]);
            backtrack_40(itog, curr, nums, i + 1, target - nums[i]);

            curr.pop_back();
        }
    }
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) { 
        vector<vector<int>> itog;
        vector<int> curr;
        sort(candidates.begin(), candidates.end());
        backtrack_40(itog, curr, candidates, 0, target);
        return itog;
    }
};