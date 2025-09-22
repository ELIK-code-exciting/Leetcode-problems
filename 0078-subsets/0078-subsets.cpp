class Solution {
public:
    void backtrack(vector<int> nums, int start, vector<int>& curr, vector<vector<int>>& itog) {
        itog.push_back(curr);

        for (int i = start; i < nums.size(); i++) {
            curr.push_back(nums[i]);
            backtrack(nums, i + 1, curr, itog);
            curr.pop_back();
        }
    }

    // [] [1] [2] [3] [1,2] [1,3] [2,3] [1,2,3]
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> itog;
        vector<int> curr;
        backtrack(nums, 0, curr, itog);
        return itog;
    }
};
