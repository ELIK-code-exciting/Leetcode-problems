class Solution {
public:
    void backtrack_90(vector<int>& nums, vector<vector<int>>& itog, int start, vector<int>& curr) {
        itog.push_back(curr);

        for (int i = start; i < nums.size(); i++) {
            if ( i > start && nums[i-1] == nums[i]) {
                continue;
            }

            curr.push_back(nums[i]);

            backtrack_90(nums, itog, i + 1, curr);

            curr.pop_back();
        }
    }
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        vector<vector<int>> itog;
        vector<int> curr;
        sort(nums.begin(), nums.end());
        backtrack_90(nums, itog, 0, curr);
        return itog;
    }
};